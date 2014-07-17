export default Ember.ArrayController.extend({
  needs: ['application'],
  numRows: 100,

  allTransactions: Ember.computed.alias('controllers.application.model'),

  transactions: function() {
    console.log('recomputing the table.');
    if (this.get('selectedCategory') != null) {
      var _this = this;
      var filteredTransactions = _.filter(this.get('allTransactions.content'), function(transaction) {
        return transaction.get('category') === _this.get('selectedCategory.name');
      });
      return _.sortBy(filteredTransactions, function (transaction) {
        return new Date(transaction.get('date')).getTime();
      });
    }
    return _.sortBy(this.get('allTransactions.content'), function (transaction) {
      return new Date(transaction.get('date')).getTime();
    }).reverse();
  }.property('allTransactions', 'allTransactions.@each.category', 'selectedCategory'),

  selectedCategory: null,

  selectedTransaction: null,

  transactionDate: null,
  transactionDescription: null,
  transactionOriginalDescription: null,
  transactionAmount: null,
  transactionType: null,
  transactionAccount: null,
  transactionCategory: null,
  transactionGroup: null,

  selectedTransactionObserver: function() {
    if (this.get('selectedTransaction') != null) {
      this.set('isEditingTransaction', true);
      this.set('transactionDate', this.get('selectedTransaction.date'));
      this.set('transactionDescription', this.get('selectedTransaction.description'));
      this.set('transactionOriginalDescription', this.get('selectedTransaction.original_description'));
      this.set('transactionAmount', this.get('selectedTransaction.amount'));
      this.set('transactionType', this.get('selectedTransaction.type'));
      this.set('transactionAccount', this.get('selectedTransaction.account'));
      this.set('transactionCategory', this.get('selectedTransaction.category'));
      this.set('transactionGroup', this.get('selectedTransaction.group'));
    }
  }.observes('selectedTransaction'),

  categories: Ember.computed.alias('controllers.application.categories'),

  columns: function() {
    var dateColumn = Ember.Table.ColumnDefinition.create({
      isResizable: false,
      textAlign: 'text-align-left',
      columnWidth: 100,
      headerCellName: 'Date',
      getCellContent: function(row) {
        return new Date(row.get('date')).toDateString();
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
      target: this,
      isResizable: false,
      textAlign: 'text-align-left',
      columnWidth: 120,
      headerCellName: 'Category',
      contentPath: 'category',
      getCellContent: function(row) {
        return row['category'];
      },
      setCellContent: function(row, value) {
        console.log('setting cell content.');
        var outerRow = _.find(
          this.get('target').get('allTransactions.content'), function(t) {
            return t.get('id') == row.get('id');
          }
        );
        outerRow.set('category', value.name);
      },
      tableCellViewClass: Ember.Table.TableCell.extend({
        isEditing: false,
        templateName: 'category-table-cell',
        categories: this.get('controllers.application.categories'),
        selectedCategory: function() {
          if (this.get('row')) {
            return {
              name: this.get('row.category'),
              value: this.get('row.category')
            };
          } else {
            return null;
          }
        }.property('row', 'row.id', 'row.category', 'rowContent'),
        selectedCategoryDidChange: function() {
          if (this.get('row') && this.get('isEditing')) {
            this.get('column').setCellContent(
              this.get('row'), this.get('selectedCategory'));
          }
        }.observes('selectedCategory'),
        onRowContentDidChange: function() {
          this.set('isEditing', false);
          if (this.get('row')) {
            console.log('rowContent changed. c: ' + this.get('row.category'));
            this.set('selectedCategory', {
              name: this.get('row.category'),
              value: this.get('row.category')
            });
          } else {
            console.log('rowContent changed. no row.');
          }
        }.observes('row', 'row.id', 'row.category'),
        click: function(event) {
          this.set('isEditing', true);
        }
      })
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
    },

    showTransactionEditPanel: function() {
      this.set('isEditingTransaction', true);
    },

    hideTransactionEditPanel: function() {
      this.set('isEditingTransaction', false);
      this.set('selectedTransaction', null);
    }
  }
});
