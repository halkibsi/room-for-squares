/* jshint node:true */
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: grunt.file.readJSON('.jshintrc'),
      grunt: {
        src: ['Gruntfile.js']
      },
      app: {
        src: [
          'js/**/*.js',
          '!js/lib/**/*.js'
        ]
      }
    },
    stylus: {
      compile: {
        files: {
          'style/build.css': 'style/style.styl' // 1:1 compile
        }
      }
    },
    watch: {
      css: {
        files: 'style/*.styl',
        tasks: ['stylus'],
        options: {
          livereload: true
        }
      },
      js: {
        files: 'js/**/*.js',
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'stylus']);

};