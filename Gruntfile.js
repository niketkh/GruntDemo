module.exports = function(grunt) {
	// Configure
	grunt.initConfig({
		jshint: {
			all: ['js/scripts.js', 'js/plugins.js']
		},

		concat: {
			dist: {
				files: {
					'js/all.js': ['js/scripts.js', 'js/plugins.js']
				}
			}
		},

		// csslint: {
		// 	all: ['css/reset.css', 'css/style.css']
		// },

		// cssmin: {
		// 	dist: {
		// 		files: {
		// 			'css/style.min.css': ['css/reset.css', 'css/style.css']
		// 		}
		// 	}
		// },

		// autoprefixer: {
		// 	all: {
		// 		src: 'css/style.min.css'
		// 	}
		// }

		less: {
			dist: {
				files: {
					'css/style.min.css': ['less/style.less', 'less/mixins.less']
				}
			},

			options: {
				compress: true
			}
		},

		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'images/src/',
					src: ['**/*.{jpg,gif,png}'],
					dest: 'images/dist/'
				}]
			}
		},

		watch: {
			less: {
				files: ['less/*.less'],
				tasks: ['less'],
				options: {
					spawn: false,
					livereload: true
				}
			},

			js: {
				files: ['js/*.js'],
				tasks: ['jshint']
			}
		}

	});

	// Load
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	// grunt.loadNpmTasks('grunt-contrib-csslint');
	// grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register
	grunt.registerTask('default', [
		'jshint',
		'concat',
		// 'csslint',
		// 'cssmin',
		// 'autoprefixer'
		'less',
		'imagemin'
	]);

};