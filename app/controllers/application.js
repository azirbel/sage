export default Ember.Controller.extend({
  queryParams: ['tab'],
  tab: null,

  overviewTabIsSelected: function() {
    return this.get('tab') === 'overview' || this.get('tab') == null;
  }.property('tab'),
  spendingTabIsSelected: function() {
    return this.get('tab') === 'spending';
  }.property('tab'),
  assetsTabIsSelected: function() {
    return this.get('tab') === 'assets';
  }.property('tab'),
  settingsTabIsSelected: function() {
    return this.get('tab') === 'settings';
  }.property('tab'),

  actions: {
    selectOverviewTab: function() {
      this.set('tab', 'overview');
    },

    selectSpendingTab: function() {
      this.set('tab', 'spending');
    },

    selectAssetsTab: function() {
      this.set('tab', 'assets');
    },

    selectSettingsTab: function() {
      this.set('tab', 'settings');
    }
  }
});
