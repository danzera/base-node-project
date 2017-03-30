module.exports = function(grunt) {
  // setting up Grunt at app load
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // uglify task
    // uglify: {
    //
    // },
    // copy task
    copy: {
      // subtasks (names are arbitray -- chosen to be specific)
      main: {
        expand: true, // don't ask (at least not for now)
        cwd: 'node_modules/jquery/dist/', // cwd === current working directory (where the file(s) you want copied is/are located)
        src: ['jquery.js'], // src === source (what file(s) and/or folders do you want copied -- can include path name, which will copy folder structure as well)
        dest: 'server/public/vendors/' // dest === destination -- where is/are the file(s) being copied over to?
      }, // end main{}
    },

    // watch task
    // watch: {
    //
    // }
    /*---ANY OTHER TASKS WE WANT---
    someTask: {

    }
    -----------------------------*/
  }); // end grunt.initConfig()

  // load NPM Tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  /*---ANY OTHER TASKS WE WANT---
  grunt.loadNpmTasks();
  -----------------------------*/

  // register tasks -- 'copy' & 'watch' ARE ALWAYS THE LAST 2 (IN THAT ORDER)
  grunt.registerTask('default', ['copy']);
};
