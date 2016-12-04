var menus = function() {
    $('#header a').click(function(event) {
        var path = $(this).attr('href');
        if (path.indexOf('#') == 0) {
            return true;
        }
        var next = function() {
            var lias = $("ul.menu li a");
            var p = path.split('/');
            for (var i = 0, l = lias.length; i < l; i++) {
                var href = $(lias[i]).attr('href');
                var h = href.split('/');
                if (p.indexOf(h[h.length - 1]) >= 0) {
                    $('ul.menu li.active').removeClass('active');
                    $(lias[i]).parent().addClass('active');
                    if ($(lias[i]).closest('.dropdown')) {
                        $(lias[i]).closest('.dropdown').addClass('active');
                    }
                }
            }
            if (path === '/' || path === '/logout') {
                return true;
            }
            renderPage(path, function(data, out) {
                $('ul[id^=submenu]').addClass('hide');
                var subIndex = data.subIndex;
                if (subIndex >= 0) {
                    $('#submenu' + subIndex).removeClass('hide');
                    lias = $("ul.submenu:visible li a");
                    for (var i = 0, l = lias.length; i < l; i++) {
                        var href = $(lias[i]).attr('href');
                        var h = href.split('/');
                        $('ul.submenu:visible li.active').removeClass('active');
                        if (p.indexOf(h[h.length - 1]) >= 0) {
                            $(lias[i]).parent().addClass('active');
                            if ($(lias[i]).closest('.dropdown')) {
                                $(lias[i]).closest('.dropdown').addClass('active');
                            }
                            break;
                        }
                    }
                    if ($('ul.submenu:visible li.active').length == 0) {
                        $(lias[0]).parent().addClass('active');
                        if ($(lias[0]).closest('.dropdown')) {
                            $(lias[0]).closest('.dropdown').addClass('active');
                        }
                    }
                }
                $("#main").html(out);
                changeADefault();
            });


            event.preventDefault();

            return false;
        };
        next();
    });
};

var state = {
    currentPage: {
        url: '/',
        view: ''
    },
};
var submitForm = function(f, paction, callback) {
    var form = f;
    $(":button").attr("disabled", "true");
    var action = $(form).attr('action');
    var cb = paction;
    if (paction && typeof paction === 'string') {
        action = paction;
    }
    if (typeof callback === 'function') {
        cb = callback;
    }

    $.post(action + '?' + new Date().getTime(), $(form).serialize(), function(data, status) {
        data.user = app.user;
        $(":button").attr("disabled", false);
        if (status === 'success') {
            if (data.err) {
                var some_html = '<br><div class="alert alert-warning fade in">';
                some_html += '<label>错误</label>' + JSON.stringify(data.err);
                some_html += '</div>';
                var box = bootbox.alert(some_html);
            } else {
                if (data.redirect) {
                    renderPage(data.redirect, function() {
                        if (cb && typeof cb === 'function') {
                            cb(data);
                        }
                        if (data.showMessage) {
                            var some_html = '<br><div class="alert alert-success fade in">';
                            some_html += '<ul id="showMessage">';
                            some_html += '<li>' + data.showMessage + '</li>';
                            some_html += '</ul>';
                            some_html += '</div>';
                            var box = bootbox.alert(some_html);

                            setTimeout(function() {
                                box.modal('hide');
                            }, 1000);
                        }
                        changeADefault();
                    });
                } else if (data.view) {
                    dust.render(data.view, data, function(err, out) {
                        if (err) {
                            return alert(err);
                        }
                        if (cb) {
                            cb(data, out);
                        }
                        $("#main").html(out);
                        $('.selectpicker').selectpicker({
                            style: 'btn-success'
                        });
                        if (data.showMessage) {
                            var some_html = '<br><div class="alert alert-success fade in">';
                            some_html += '<ul id="showMessage">';
                            some_html += '<li>' + data.showMessage + '</li>';
                            some_html += '</ul>';
                            some_html += '</div>';
                            var box = bootbox.alert(some_html);

                            setTimeout(function() {
                                box.modal('hide');
                            }, 1000);
                        }
                        changeADefault();
                    });
                } else if (cb && typeof cb === 'function') {
                    cb(data);
                } else {
                    var some_html = '<br><div class="alert alert-danger fade in">';
                    some_html += '<label>返回结果出错：form提交后返回数据必须有view或者redirect或者回调函数</label>';
                    some_html += '</div>';
                    bootbox.alert(some_html);
                }
            }
        } else {
            var some_html = '<br><div class="alert alert-danger fade in">';
            some_html += '<label>调用后台出错：' + xhr.statusText + '</label>';
            some_html += '</div>';
            bootbox.alert(some_html);
        }
    });
};


var renderPage = function(url, cb) {
    state.currentPage.url = url;
    var realUrl = url.indexOf('?') > -1 ? url + '&' + new Date().getTime() : url + '?' + new Date().getTime();
    $.get(realUrl, function(data, status) {
        data.user = app.user;
        if (status === 'success') {
            if (data.redirect) {
                renderPage(data.redirect, cb);
            } else {
                dust.render(data.view, data, function(err, out) {
                    if (err) {
                        return alert(err);
                    }
                    if (cb) {
                        cb(data, out);
                    }
                    $("#main").html(out);
                    $('.selectpicker').selectpicker({
                        style: 'btn-success'
                    });
                    changeADefault();
                    $(":button").attr("disabled", false);
                });
            }
        } else {
            return alert(xhr.statusText);
        }
    });
};
var renderCurrent = function(cb) {
    var page = state.currentPage;
    renderPage(page.url, cb);
};
var changeADefault = function() {
    $('#main a').click(function(event) {
        var url = $(this).attr('href');
        if (!url) {
            return true;
        }
        if (url.indexOf('#') === 0) {
            return true;
        }
        renderPage(url, function(data, out) {
            $("#main").html(out);
        });
        event.preventDefault();
        return false;
    });
};


var bootbox;
var async;
var app = {
    init: function($, bt, as) {
        $(function() {
            bootbox = bt;
            async = as;
            bootbox.setDefaults({
                locale: "zh_CN"
            });
            async.series([
                function(callback) {
                    baseCode.getBaseData(function() {
                        callback(null, 'one');
                    });
                },
                function(callback) {
                    $.get('/apis/menus?' + new Date().getTime(), function(data, status) {
                        if (status === 'success') {
                            var page = data.view;
                            dust.render(page, data, function(err, out) {
                                if (err) {
                                    return alert(err);
                                }
                                $("#header").html(out);
                                // bootbox.hideAll();
                                menus();
                            });
                        } else {
                            return alert(xhr.statusText);
                        }
                        callback(null, 'two');
                    });
                }
            ]);
        });
    },
    user: {},
    showSucess: function(message, cb, autoClose) {
        var some_html = '<br><div class="alert alert-success fade in">';
        some_html += '<label>' + message + '</label>';
        some_html += '</div>';
        var box = bootbox.alert(some_html);
        if (cb && typeof cb === 'function') {
            box.on('hidden.bs.modal', function(e) {
                cb();
            });
        }
        if (autoClose) {
            setTimeout(function() {
                box.modal('hide');
            }, 1000);
        }
    },
    showError: function(message) {
        var some_html = '<br><div class="alert alert-danger fade in">';
        some_html += '<label>调用后台出错：' + message + '</label>';
        some_html += '</div>';
        bootbox.alert(some_html);
    }
};
