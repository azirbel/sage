export default Ember.Controller.extend({
  overviewTabIsSelected: true,
  spendingTabIsSelected: false,

  actions: {
    selectOverviewTab: function() {
      window.console.log('overview tab');
      this.set('overviewTabIsSelected', true);
      this.set('spendingTabIsSelected', false);
    },

    selectSpendingTab: function() {
      window.console.log('spending tab');
      this.set('overviewTabIsSelected', false);
      this.set('spendingTabIsSelected', true);
    }
  }
});
