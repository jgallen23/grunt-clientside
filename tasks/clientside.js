/*
 * grunt-clientside
 * https://github.com/jgallen23/grunt-clientside
 *
 * Copyright (c) 2012 Greg Allen
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md
  
  var clientside = require('clientside');
  var fs = require('fs');

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('clientside', 'Generate clientside js code from CommonJS modules', function() {
    this.requiresConfig('clientside');
    var self = this;
    var done = this.async();

    clientside(this.data, function(err, src) {
      if (err) {
        return grunt.log.error(err.message);
      }

      fs.writeFile(self.data.output, src, function(err) {
        if (err) {
          return grunt.log.error(err.message);
        }
        grunt.log.writeln(self.data.output + ' created.');
        done();
      });

    });
  });


};
