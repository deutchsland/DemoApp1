'use strict';


module.exports = function requirejs(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	// Options
	return {
        build: {
            options: {
                baseUrl: 'public/js',
                dir: '.build/js',
                optimize: 'uglify',
                modules: [
                    { name: 'app' }
                ],
                mainConfigFile:"public/js/main.js",
                "path":{
                    "jquery":"jquery.min.js",
                    "ace.min":"ace.min.js",
                    "ace-elements":"ace-elements.min.js",
                    "ace-extra":"ace-extra.min.js",
                    "bootstrap":"bootstrap.js",
                    "bootstrap.min":"bootstrap.min.js",
                    "bootstrap.datetimepicker":"bootstrap-datetimepicker.js",
                    "bootstrap.datetimepicker.min":"bootstrap-datetimepicker.min.js",
                    "bootstrap.datetimepicker.uk":"bootstrap-datetimepicker.uk.js",
                    "bootstrap.datetimepicker.CN":"bootstrap-datetimepicker.zh-CN.js",
                    "bootstrap.datetimepicker.TW":"bootstrap-datetimepicker.zh-TW.js",
                    "bootstrap.tag.min":"bootstrap-tag.min.js",
                    "bootstrap.wysiwyg":"bootstrap-wysiwyg.min.js",
                    "dust": "/components/dustjs-linkedin/dist/dust-core.min",
                    "dustHelper": "/components/dustjs-linkedin-helpers/dist/dust-helpers.min",
                    "jquery.hotkeys":"jquery.hotkeys.min.js",
                    "jquery.mobile.custom.min":"jquery.mobile.custom.min.js",
                    "jquery.slimscroll.min":"jquery.slimscroll.min.js",
                    "jquery.ui.touch-punch.min":"jquery.ui.touch-punch.min.js",
                    "jquery.validate":"jquery.validate.js",
                    "jquery.validate.min":"jquery.validate.min.js",
                    "bootbox.min":"bootbox.min.js",
                    "typeahead-bs2.min":"typeahead-bs2.min.js",

                    "admin.products":"templates/admin/products",
                    "layouts.master":"templates/layouts/master",
                    "salesupport.detail":"templates/salesupport/detail",
                    "salesupport.form":"templates/salesupport/form",
                    "salesupport.oneKeyRenew":"templates/salesupport/oneKeyRenew",
                    "salesupport:sale":"templates/salesupport/sale",
                    "system.user.add":"templates/user/add",
                    "system.user._form":"templates/user/_form"

                }
            }
        }
	};
};
