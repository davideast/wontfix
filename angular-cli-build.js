/* global require, module */

const Angular2App = require('angular-cli/lib/broccoli/angular2-app');
const mergeTrees = require('broccoli-merge-trees');
const BroccoliFunnel = require('broccoli-funnel');

module.exports = function(defaults) {
  const app = new Angular2App(defaults, {
    vendorNpmFiles: [
      'angularfire2/**/*.js',
      'firebase/lib/*.js'
    ]
  });
  
  const materialTree = BroccoliFunnel('node_modules/@angular2-material', {
    destDir: '@angular2-material'
  });
  
  return mergeTrees([
    app.toTree(),
    materialTree,
  ]);
};
