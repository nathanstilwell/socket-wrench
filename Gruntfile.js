/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        browser: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {
          jQuery: true,

          // RequireJS Globals
          define: true,

          // Jasmine Globals
          describe: true,
          expect: true,
          it: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      tests: {
        src: ['test/**/*.js']
      }
    },

    connect: {
      test: {
        options: {
          base: '.',
          port: 9001
        }
      }
    },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', function () {
    grunt.task.run('connect:test');
    grunt.log.write('Go to http://localhost:9001/test/runner.html\n' +
                    '  to run the jasmine test suite.\n\n');
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'test', 'watch']);

};