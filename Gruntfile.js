/*global module:false*/
module.exports = function(grunt) {
'use strict';

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),

		clean: {
			build: [ 'dist' ]
		},
		concat: {
			dist: {
				src: [ 'src/jquery.pointy.js' ],
				dest : 'dist/jquery.pointy.js'
			}
		},
		jshint: {
			files: {
				src: [
				'Gruntfile.js',
				'src/**/*.js',
				'test/*.js'
				]
			},
			options: {
				"loopfunc": true,
				"jquery": true,
				"browser": true
			}
		},
		uglify: {
			options: {
				banner: '/*! jQuery <%= pkg.name %> - v<%= pkg.version %> */\n',
				report: 'gzip'
			},
			dist: {
				files: {
					'dist/jquery.pointy.min.js': [ 'dist/jquery.pointy.js' ]
				}
			}
		},
		watch: {
			scripts: {
				files: ['src/**/*.js'],
				tasks: ['build']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean' );
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', ['clean', 'concat', 'jshint', 'uglify']);

};
