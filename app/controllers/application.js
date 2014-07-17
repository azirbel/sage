export default Ember.Controller.extend({
  queryParams: ['tab'],
  tab: null,

  categories: [
    {
      name: 'Air Travel',
      symbol: 'Air Travel',
      def: 'Air Travel'
    },
    {
      name: 'Alcohol & Bars',
      symbol: 'Alcohol & Bars',
      def: 'Alcohol & Bars'
    },
    {
      name: 'Amusement',
      symbol: 'Amusement',
      def: 'Amusement'
    },
    {
      name: 'ATM Fee',
      symbol: 'ATM Fee',
      def: 'ATM Fee'
    },
    {
      name: 'Auto & Transport',
      symbol: 'Auto & Transport',
      def: 'Auto & Transport'
    },
    {
      name: 'Auto Insurance',
      symbol: 'Auto Insurance',
      def: 'Auto Insurance'
    },
    {
      name: 'Bank Fee',
      symbol: 'Bank Fee',
      def: 'Bank Fee'
    },
    {
      name: 'Bonus',
      symbol: 'Bonus',
      def: 'Bonus'
    },
    {
      name: 'Books',
      symbol: 'Books',
      def: 'Books'
    },
    {
      name: 'Cash & ATM',
      symbol: 'Cash & ATM',
      def: 'Cash & ATM'
    },
    {
      name: 'Check',
      symbol: 'Check',
      def: 'Check'
    },
    {
      name: 'Clothing',
      symbol: 'Clothing',
      def: 'Clothing'
    },
    {
      name: 'Coffee Shops',
      symbol: 'Coffee Shops',
      def: 'Coffee Shops'
    },
    {
      name: 'Coffee Shops',
      symbol: 'Coffee Shops',
      def: 'Coffee Shops'
    },
    {
      name: 'Electronics & Software',
      symbol: 'Electronics & Software',
      def: 'Electronics & Software'
    },
    {
      name: 'Entertainment',
      symbol: 'Entertainment',
      def: 'Entertainment'
    },
    {
      name: 'Fast Food',
      symbol: 'Fast Food',
      def: 'Fast Food'
    },
    {
      name: 'Food & Dining',
      symbol: 'Food & Dining',
      def: 'Food & Dining'
    },
    {
      name: 'Furnishings',
      symbol: 'Furnishings',
      def: 'Furnishings'
    },
    {
      name: 'Gas & Fuel',
      symbol: 'Gas & Fuel',
      def: 'Gas & Fuel'
    },
    {
      name: 'Gift',
      symbol: 'Gift',
      def: 'Gift'
    },
    {
      name: 'Gift',
      symbol: 'Gift',
      def: 'Gift'
    },
    {
      name: 'Groceries',
      symbol: 'Groceries',
      def: 'Groceries'
    },
    {
      name: 'Groceries',
      symbol: 'Groceries',
      def: 'Groceries'
    },
    {
      name: 'Hair',
      symbol: 'Hair',
      def: 'Hair'
    },
    {
      name: 'Hide from Budgets & Trends',
      symbol: 'Hide from Budgets & Trends',
      def: 'Hide from Budgets & Trends'
    },
    {
      name: 'Hotel',
      symbol: 'Hotel',
      def: 'Hotel'
    },
    {
      name: 'Income',
      symbol: 'Income',
      def: 'Income'
    },
    {
      name: 'Interest Income',
      symbol: 'Interest Income',
      def: 'Interest Income'
    },
    {
      name: 'Kids',
      symbol: 'Kids',
      def: 'Kids'
    },
    {
      name: 'Local Tax',
      symbol: 'Local Tax',
      def: 'Local Tax'
    },
    {
      name: 'Mobile Phone',
      symbol: 'Mobile Phone',
      def: 'Mobile Phone'
    },
    {
      name: 'Mortgage & Rent',
      symbol: 'Mortgage & Rent',
      def: 'Mortgage & Rent'
    },
    {
      name: 'Movies & DVDs',
      symbol: 'Movies & DVDs',
      def: 'Movies & DVDs'
    },
    {
      name: 'Music',
      symbol: 'Music',
      def: 'Music'
    },
    {
      name: 'Newspapers & Magazines',
      symbol: 'Newspapers & Magazines',
      def: 'Newspapers & Magazines'
    },
    {
      name: 'Parking',
      symbol: 'Parking',
      def: 'Parking'
    },
    {
      name: 'Paycheck',
      symbol: 'Paycheck',
      def: 'Paycheck'
    },
    {
      name: 'Pharmacy',
      symbol: 'Pharmacy',
      def: 'Pharmacy'
    },
    {
      name: 'Public Transportation',
      symbol: 'Public Transportation',
      def: 'Public Transportation'
    },
    {
      name: 'Reimbursement',
      symbol: 'Reimbursement',
      def: 'Reimbursement'
    },
    {
      name: 'Rental Car & Taxi',
      symbol: 'Rental Car & Taxi',
      def: 'Rental Car & Taxi'
    },
    {
      name: 'Restaurants',
      symbol: 'Restaurants',
      def: 'Restaurants'
    },
    {
      name: 'Service & Parts',
      symbol: 'Service & Parts',
      def: 'Service & Parts'
    },
    {
      name: 'Shopping',
      symbol: 'Shopping',
      def: 'Shopping'
    },
    {
      name: 'Skin Care',
      symbol: 'Skin Care',
      def: 'Skin Care'
    },
    {
      name: 'Sporting Goods',
      symbol: 'Sporting Goods',
      def: 'Sporting Goods'
    },
    {
      name: 'Sports',
      symbol: 'Sports',
      def: 'Sports'
    },
    {
      name: 'Student Loan',
      symbol: 'Student Loan',
      def: 'Student Loan'
    },
    {
      name: 'Taxes',
      symbol: 'Taxes',
      def: 'Taxes'
    },
    {
      name: 'TOTAL CHECKING',
      symbol: 'TOTAL CHECKING',
      def: 'TOTAL CHECKING'
    },
    {
      name: 'Transfer',
      symbol: 'Transfer',
      def: 'Transfer'
    },
    {
      name: 'Transfer for Cash Spending',
      symbol: 'Transfer for Cash Spending',
      def: 'Transfer for Cash Spending'
    },
    {
      name: 'Transfer for Checks',
      symbol: 'Transfer for Checks',
      def: 'Transfer for Checks'
    },
    {
      name: 'Uncategorized',
      symbol: 'Uncategorized',
      def: 'Uncategorized'
    },
    {
      name: 'Utilities',
      symbol: 'Utilities',
      def: 'Utilities'
    },
    {
      name: 'Vacation',
      symbol: 'Vacation',
      def: 'Vacation'
    },
    {
      name: 'Web Hosting',
      symbol: 'Web Hosting',
      def: 'Web Hosting'
    }
  ],

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
