Package.describe({
  name: 'selchenkov:angular-autocomplete',
  summary: 'Meteor package for the angular-autocomplete library',
  version: '0.0.2',
  git: 'https://github.com/vashik/meteor-angular-autocomplete.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use([
        'urigo:angular@0.5.5',
        'mquandalle:bower@0.1.11',
        'mvrx:bluebird@0.0.1',
        'stevezhu:lodash@1.0.2'],
      'client');  // Add bower
  api.addFiles('selchenkov:angular-autocomplete.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('selchenkov:angular-autocomplete');
  api.addFiles('selchenkov:angular-autocomplete-tests.js');
});
