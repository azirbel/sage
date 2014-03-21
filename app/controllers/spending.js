export default Ember.ArrayController.extend({
  needs: ['application'],
  numRows: 100,

  transactions: Ember.computed.alias('controllers.application.model'),

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

  content: Ember.computed.alias('controllers.application.model')
});
