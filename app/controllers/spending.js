export default Ember.ArrayController.extend({
  needs: ['application'],
  numRows: 100,

  allTransactions: Ember.computed.alias('controllers.application.model'),

  transactions: function() {
    if (this.get('selectedCategory') != null) {
      var _this = this;
      var filteredTransactions = _.filter(this.get('allTransactions.content'), function(transaction) {
        return transaction.get('category') === _this.get('selectedCategory.name');
      });
      return _.sortBy(filteredTransactions, function (transaction) {
        return transaction.get('date').getTime();
      });
    }
    return _.sortBy(this.get('allTransactions.content'), function (transaction) {
      return transaction.get('date').getTime();
    });
  }.property('allTransactions', 'selectedCategory'),

  selectedCategory: null,

  categories: [
    {
      name: 'food',
      symbol: 'fo',
      def: 'food'
    },
    {
      name: 'entertainment',
      symbol: 'en',
      def: 'entertainment'
    },
    {
      name: 'UNCATEGORIZED',
      symbol: 'UN',
      def: 'UNCATEGORIZED'
    }
  ],

  columns: function() {
    var dateColumn = Ember.Table.ColumnDefinition.create({
      isResizable: false,
      textAlign: 'text-align-left',
      columnWidth: 100,
      headerCellName: 'Date',
      getCellContent: function(row) {
        return row.get('date').toDateString();
      }
    });
    var descriptionColumn = Ember.Table.ColumnDefinition.create({
      isResizable: false,
      textAlign: 'text-align-left',
      columnWidth: 200,
      headerCellName: 'Description',
      contentPath: 'description'
    });
    var categoryColumn = Ember.Table.ColumnDefinition.create({
      isResizable: false,
      textAlign: 'text-align-left',
      tableCellViewClass: Ember.Table.TableCell.extend({
        templateName: 'category-table-cell',
      }),
      columnWidth: 120,
      headerCellName: 'Category',
      contentPath: 'category'
    });
    var amountColumn = Ember.Table.ColumnDefinition.create({
      isResizable: false,
      tableCellViewClass: Ember.Table.TableCell.extend({
        templateName: 'amount-table-cell',
      }),
      columnWidth: 80,
      headerCellName: 'Amount',
      getCellContent: function(row) {
        return '$ ' + row.get('amount').toFixed(2);
      }
    });
    return [dateColumn, descriptionColumn, categoryColumn, amountColumn];
  }.property(),

  spendingByCategory: function() {
    var _this = this;
    return _.map(this.get('categories'), function(category) {
      var transactionsInCategory = _.filter(_this.get('transactions'), function(transaction) {
        return transaction.get('category') === category.name;
      });
      var total = _.reduce(transactionsInCategory, function(total, transaction) {
        return total + transaction.get('amount');
      }, 0);
      return {
        "label": category.name,
        "value": total
      };
    });
  }.property('categories', 'transactions'),

  view: null,

  transactionsViewIsSelected: function() {
    return this.get('view') === 'transactions' || this.get('view') == null;
  }.property('view'),
  analysisViewIsSelected: function() {
    return this.get('view') === 'analysis';
  }.property('view'),
  budgetsViewIsSelected: function() {
    return this.get('view') === 'budgets';
  }.property('view'),

  actions: {
    selectTransactionsView: function() {
      this.set('view', 'transactions');
    },

    selectAnalysisView: function() {
      this.set('view', 'analysis');
    },

    selectBudgetsView: function() {
      this.set('view', 'budgets');
    }
  }
});
