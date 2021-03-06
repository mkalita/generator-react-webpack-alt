'use strict';
let generator = require('yeoman-generator');

module.exports = generator.NamedBase.extend({

  constructor: function() {
    generator.NamedBase.apply(this, arguments);
  },

  writing: function() {

    // Copy the dispatcher file
    this.fs.copyTpl(
      this.templatePath('Dispatcher.js'),
      this.destinationPath(`src/components/${this.name}.js`)
    );
  }
});
