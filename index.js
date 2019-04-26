'use strict';
/* jshint node: true */

module.exports = {
  // name: 'ember-intl-tel-input',
  name: require('./package').name,

  included: function(app) {
    // this._super.included(app);
    this._super.apply(this, arguments);

    var config = app.options.intlTelInput;

    if (config && true === config.includeUtilsScript) {
      app.import(app.bowerDirectory + '/intl-tel-input/build/js/utils.js');
    }

    app.import(app.bowerDirectory + '/intl-tel-input/build/js/intlTelInput.js');
    app.import(app.bowerDirectory + '/intl-tel-input/build/img/flags.png', { destDir: 'assets/images' });
    app.import(app.bowerDirectory + '/intl-tel-input/build/img/flags@2x.png', { destDir: 'assets/images' });
  },
};
