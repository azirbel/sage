import Resolver from 'ember/resolver';

var App = Ember.Application.extend({
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver['default']
});

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

App.ApplicationAdapter = DS.FixtureAdapter;

export default App;
