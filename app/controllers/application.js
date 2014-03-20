export default Ember.Controller.extend({
  overviewTabIsSelected: true,
  spendingTabIsSelected: false,
  assetsTabIsSelected: false,
  settingsTabIsSelected: false,

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
    },

    selectSpendingTab: function() {
      this.deselectTabs();
      this.set('spendingTabIsSelected', true);
    },

    selectAssetsTab: function() {
      this.deselectTabs();
      this.set('assetsTabIsSelected', true);
    },

    selectSettingsTab: function() {
      this.deselectTabs();
      this.set('settingsTabIsSelected', true);
    }
  }
});
