export default Ember.Controller.extend({
  queryParams: ['tab'],
  tab: null,

  overviewTabIsSelected: function() {
    window.console.log('overview tirgger');
    return this.get('tab') === 'overview' || this.get('tab') == null;
  }.property('tab'),
  spendingTabIsSelected: function() {
    return this.get('tab') === 'spending';
  }.property('tab'),
  assetsTabIsSelected: false,
  settingsTabIsSelected: false,

  tabChanged: function() {
    window.console.log('tab changed');
  }.observes('tab').on('init'),

  deselectTabs: function() {
    this.set('overviewTabIsSelected', false);
    this.set('spendingTabIsSelected', false);
    this.set('assetsTabIsSelected', false);
    this.set('settingsTabIsSelected', false);
  },

  actions: {
    selectOverviewTab: function() {
      this.deselectTabs();
      this.set('overviewTabIsSelected', true);
      this.set('tab', 'overview');
    },

    selectSpendingTab: function() {
      this.deselectTabs();
      this.set('spendingTabIsSelected', true);
      this.set('tab', 'spending');
    },

    selectAssetsTab: function() {
      this.deselectTabs();
      this.set('assetsTabIsSelected', true);
      this.set('tab', 'assets');
    },

    selectSettingsTab: function() {
      this.deselectTabs();
      this.set('settingsTabIsSelected', true);
      this.set('tab', 'settings');
    }
  }
});
