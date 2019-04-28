'use strict';

// import Resolver from 'ember/resolver';
// import config from '../../config/environment';
//
// var resolver = Resolver.create();
//
// resolver.namespace = {
//   modulePrefix: config.modulePrefix,
//   podModulePrefix: config.podModulePrefix
// };
//
// export default resolver;
define("dummy/tests/helpers/resolver", [], function () {
  "use strict";
});
// import Ember from 'ember';
// import Application from '../../app';
// import config from '../../config/environment';
//
// export default function startApp(attrs) {
//   var application;
//
//   var attributes = Ember.merge({}, config.APP);
//   attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;
//
//   Ember.run(function() {
//     application = Application.create(attributes);
//     application.setupForTesting();
//     application.injectTestHelpers();
//   });
//
//   return application;
// }
define("dummy/tests/helpers/start-app", [], function () {
  "use strict";
});
define("dummy/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/bootstrap-affix.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/bootstrap-affix.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define("dummy/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('dummy/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/bootstrap-affix.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/bootstrap-affix.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'dummy/templates/index.hbs should pass TemplateLint.\n\ndummy/templates/index.hbs\n  95:18  error  Incorrect indentation for `code-block` beginning at L87:C12. Expected `{{/code-block}}` ending at L95:C18 to be at an indentation of 12 but was found at 3.  block-indentation\n  87:49  error  Incorrect indentation for `// Brocfile.js\n\nvar app = new EmberAddon({\n\n  intlTelInput: {\n    includeUtilsScript: true, // default to false\n  },\n\n});` beginning at L87:C49. Expected `// Brocfile.js\n\nvar app = new EmberAddon({\n\n  intlTelInput: {\n    includeUtilsScript: true, // default to false\n  },\n\n});` to be at an indentation of 14 but was found at 49.  block-indentation\n  136:50  error  Incorrect indentation for `code-block` beginning at L128:C12. Expected `{{/code-block}}` ending at L136:C50 to be at an indentation of 12 but was found at 33.  block-indentation\n  128:50  error  Incorrect indentation for `{{intl-tel-input\n  allowExtensions=true\n  value=value\n  selectedCountryData=selectedCountryData\n  number=number\n  extension=extension\n  numberType=numberType\n  isValidNumber=isValidNumber\n  validationError=validationError}}` beginning at L128:C50. Expected `{{intl-tel-input\n  allowExtensions=true\n  value=value\n  selectedCountryData=selectedCountryData\n  number=number\n  extension=extension\n  numberType=numberType\n  isValidNumber=isValidNumber\n  validationError=validationError}}` to be at an indentation of 14 but was found at 49.  block-indentation\n  196:16  error  Incorrect indentation for `code-block` beginning at L185:C12. Expected `{{/code-block}}` ending at L196:C16 to be at an indentation of 12 but was found at 0.  block-indentation\n  185:49  error  Incorrect indentation for `// controller\n\ngeoIpLookupFunc: function(callback) {\n  $.getJSON(\'//www.telize.com/geoip\')\n   .always(function(resp) {\n     if (!resp || !resp.country_code) {\n       callback(\'\');\n     }\n\n     callback(resp.country_code);\n   });\n}` beginning at L185:C49. Expected `// controller\n\ngeoIpLookupFunc: function(callback) {\n  $.getJSON(\'//www.telize.com/geoip\')\n   .always(function(resp) {\n     if (!resp || !resp.country_code) {\n       callback(\'\');\n     }\n\n     callback(resp.country_code);\n   });\n}` to be at an indentation of 14 but was found at 49.  block-indentation\n  199:46  error  Incorrect indentation for `code-block` beginning at L197:C12. Expected `{{/code-block}}` ending at L199:C46 to be at an indentation of 12 but was found at 29.  block-indentation\n  197:50  error  Incorrect indentation for `{{intl-tel-input\n  defaultCountry="auto"\n  geoIpLookup=geoIpLookupFunc}}` beginning at L197:C50. Expected `{{intl-tel-input\n  defaultCountry="auto"\n  geoIpLookup=geoIpLookupFunc}}` to be at an indentation of 14 but was found at 49.  block-indentation\n  15:6  error  HTML comment detected  no-html-comments\n  153:18  error  Usage of triple curly brackets is unsafe  no-triple-curlies\n  155:18  error  Usage of triple curly brackets is unsafe  no-triple-curlies\n  157:18  error  Usage of triple curly brackets is unsafe  no-triple-curlies\n  159:18  error  Usage of triple curly brackets is unsafe  no-triple-curlies\n  161:18  error  Usage of triple curly brackets is unsafe  no-triple-curlies\n  163:18  error  Usage of triple curly brackets is unsafe  no-triple-curlies\n  165:18  error  Usage of triple curly brackets is unsafe  no-triple-curlies\n  167:18  error  Usage of triple curly brackets is unsafe  no-triple-curlies\n  49:35  error  you must use double quotes in templates  quotes\n  65:35  error  you must use double quotes in templates  quotes\n  87:35  error  you must use double quotes in templates  quotes\n  96:35  error  you must use double quotes in templates  quotes\n  128:35  error  you must use double quotes in templates  quotes\n  153:36  error  you must use double quotes in templates  quotes\n  155:69  error  you must use double quotes in templates  quotes\n  157:69  error  you must use double quotes in templates  quotes\n  159:73  error  you must use double quotes in templates  quotes\n  161:38  error  you must use double quotes in templates  quotes\n  163:44  error  you must use double quotes in templates  quotes\n  165:38  error  you must use double quotes in templates  quotes\n  165:45  error  you must use double quotes in templates  quotes\n  167:56  error  you must use double quotes in templates  quotes\n  185:35  error  you must use double quotes in templates  quotes\n  197:35  error  you must use double quotes in templates  quotes\n  4:66  error  Self-closing a void element is redundant  self-closing-void-elements\n  41:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  79:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  110:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  177:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  213:8  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
});
define("dummy/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/components/intl-tel-input-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/components/intl-tel-input-test.js should pass ESLint\n\n');
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("dummy/tests/unit/components/intl-tel-input-test", ["ember-qunit", "ember-test-helpers/wait", "sinon"], function (_emberQunit, _wait, _sinon) {
  "use strict";

  (0, _emberQunit.moduleForComponent)('intl-tel-input', 'Unit | Component | intl-tel-input', {
    unit: true,

    beforeEach() {
      _sinon.default.spy(Ember.$.fn, 'intlTelInput');
    },

    afterEach() {
      Ember.$.fn.intlTelInput.restore();
    }

  });
  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(4); // Creates the component instance

    var component = this.subject();
    assert.equal(component._state, 'preRender'); // Renders the component to the page

    this.render();
    assert.equal(component._state, 'inDOM');
    var element = component.$()[0];
    assert.equal(element.tagName.toLowerCase(), 'input');
    assert.equal(element.type.toLowerCase(), 'tel');
  });
  (0, _emberQunit.test)('setupIntlTelInput', function (assert) {
    assert.expect(1);
    this.render();
    assert.ok(Ember.$.fn.intlTelInput.called, 'intlTelInput called');
  });
  (0, _emberQunit.test)('properties', function (assert) {
    assert.expect(1);
    var component = this.subject();
    component.setProperties({
      allowExtensions: 'allow extensions',
      autoFormat: 'auto format',
      autoHideDialCode: 'auto hide dial code',
      autoPlaceholder: 'auto placeholder',
      defaultCountry: 'us',
      geoIpLookup: 'geo ip lookup',
      nationalMode: 'national mode',
      numberType: 'MOBILE',
      onlyCountries: ['us'],
      preferredCountries: ['us']
    });
    this.render();
    assert.deepEqual({
      allowExtensions: 'allow extensions',
      autoFormat: 'auto format',
      autoHideDialCode: 'auto hide dial code',
      autoPlaceholder: 'auto placeholder',
      defaultCountry: 'us',
      geoIpLookup: 'geo ip lookup',
      nationalMode: 'national mode',
      numberType: 'MOBILE',
      onlyCountries: ['us'],
      preferredCountries: ['us']
    }, Ember.$.fn.intlTelInput.args[0][0], 'intlTelInput called with arguments');
  });
  (0, _emberQunit.test)('it syncs the component value to the input value', function (assert) {
    assert.expect(3);
    var component = this.subject();
    this.render();
    Ember.run(() => {
      component.set('value', 'old value');
    });
    var el = component.$();
    assert.equal(el.val(), 'old value');
    Ember.run(() => {
      el.val('new value');
      el.change();
    });
    return (0, _wait.default)().then(() => {
      assert.equal(el.val(), 'new value');
      assert.equal(component.get('value'), 'new value');
    });
  });
  (0, _emberQunit.test)('isValidNumber', function (assert) {
    assert.expect(1);
    var component = this.subject();
    component.set('value', '12065555555');
    this.render();
    assert.ok(component.get('isValidNumber'), 'isValidNumber');
  });
  (0, _emberQunit.test)('selectedCountryData', function (assert) {
    assert.expect(1);
    var component = this.subject();
    component.set('onlyCountries', ['us']);
    component.set('defaultCountry', 'us');
    this.render();
    assert.deepEqual(component.get('selectedCountryData'), {
      'areaCodes': null,
      'dialCode': '1',
      'iso2': 'us',
      'name': 'United States',
      'priority': 0
    });
  });
  (0, _emberQunit.test)('extension', function (assert) {
    assert.expect(1);
    var component = this.subject();
    component.set('numberFormat', 'E14');
    component.set('value', '+12065555555 ext. 12345');
    this.render();
    assert.equal(component.get('extension'), '12345');
  });
  (0, _emberQunit.test)('number', function (assert) {
    assert.expect(1);
    var component = this.subject();
    component.set('numberFormat', 'E14');
    component.set('value', '1 206 555 5555 ext. 12345');
    this.render();
    assert.equal(component.get('number'), '+1206555555512345');
  });
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
