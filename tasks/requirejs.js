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

                mainConfigFile:"public/js/main",
                "paths":{
                    "jquery":"jquery.min",
                    "async":"async.min",
                    "ace.extra": "ace-extra.min",
                    "ace.elements": "ace-elements.min",
                    "ace.min": "ace.min",
                    "bootstrap":"bootstrap.min",
                    "bootstrap.min":"bootstrap.min",
                    "bootstrap.datetimepicker":"bootstrap-datetimepicker.min",
                    "bootstrap.datetimepicker.min":"bootstrap-datetimepicker.min",



                    "bootstrap.tag.min":"bootstrap-tag.min",
                    "bootstrap.wysiwyg":"bootstrap-wysiwyg.min",
                    "dust": "/components/dustjs-linkedin/dist/dust-core.min",
                    "dustHelper": "/components/dustjs-helpers/dist/dust-helpers.min",
                    "jquery.hotkeys":"jquery.hotkeys.min",
                    "jquery.mobile.custom.min":"jquery.mobile.custom.min",
                    "jquery.slimscroll.min":"jquery.slimscroll.min",
                    "jquery.ui.touch-punch.min":"jquery.ui.touch-punch.min",
                    "jquery.validate":"jquery.validate.min",
                    "jquery.validate.min":"jquery.validate.min",
                    "bootbox.min":"bootbox.min",
                    "typeahead-bs2.min":"typeahead-bs2.min",

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
