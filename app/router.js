// ensure we don't share routes between all Router instances
var Router = Ember.Router.extend();

Router.map(function() {
});

Router.reopen({
  location: 'history'
});

export default Router;
