export default Ember.Controller.extend({
  numRows: 100,

  columns: function() {
    var dateColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Date',
      contentPath: 'date'
    });
    var descriptionColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 200,
      headerCellName: 'Description',
      contentPath: 'description'
    });
    var categoryColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Category',
      contentPath: 'category'
    });
    var amountColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Amount',
      contentPath: 'amount'
    });
    return [dateColumn, descriptionColumn, categoryColumn, amountColumn];
  }.property(),

  content: []
});
