import Resolver from 'ember/resolver';

var App = Ember.Application.extend({
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver['default']
});

export default App;
