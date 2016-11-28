'use strict';


module.exports = function (grunt) {

    // Load the project's grunt tasks from a directory

	
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json')
	});

    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

    
         grunt.loadNpmTasks('grunt-makara-amdify');
		 grunt.loadNpmTasks('grunt-contrib-uglify');
		 grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Register group tasks

	grunt.registerTask('default',['jshint','uglify','watch','test']);


    grunt.registerTask('build', ['eslint', 'eslint', 'dustjs', 'makara-amdify', 'requirejs', 'copyto']);

    grunt.registerTask('test', [ 'eslint', 'mochacli' ]);

    
};
