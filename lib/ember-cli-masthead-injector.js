var replace = require('broccoli-string-replace');
var httpsync = require('httpsync');

function EmberCLIMastheadInjector(project) {
  this.project = project;
  this.name = 'ember-cli-masthead-injector';
}

EmberCLIMastheadInjector.prototype.included = function(app) {
  this.app = app;
  this.mastheadSection = this.project.require('./config/environment')()["mastheadSection"] || "help-and-support"
};

EmberCLIMastheadInjector.prototype.treeFor = function(type) {}

EmberCLIMastheadInjector.prototype.postprocessTree = function(type, tree) {
  var requests = {
    skycomCss: httpsync.get('http://assets.nb.sky.com/resources/mobile-ready/12/css/'),
    skycomJs: httpsync.get('http://assets.nb.sky.com/resources/mobile-ready/12/js/'),
    skycomHeader: httpsync.get('http://assets.nb.sky.com/masthead/'+ this.mastheadSection +'/'),
    skycomFooter: httpsync.get('http://assets.nb.sky.com/footer/')
  };

  var patterns = [];

  for (i in requests) {
    var request = requests[i];

    patterns.push({
      match: new RegExp('<!-- @import ' + i + ' -->', 'ig'),
      replacement: request.end().data.toString('utf-8')
    });
  }

  return replace(tree, {
    files: ['index.html', 'tests/index.html'],
    patterns: patterns
  });
}

EmberCLIMastheadInjector.prototype.postBuild = function(results) {}

module.exports = EmberCLIMastheadInjector;
