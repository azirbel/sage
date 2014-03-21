var Transaction = DS.Model.extend({
  date: DS.attr('date'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  amount: DS.attr('number')
});

Transaction.FIXTURES = [
  {
    id: 1,
    date: new Date(2014, 2, 20),
    description: 'Asian Box',
    category: 'food',
    amount: 9.68
  },
  {
    id: 2,
    date: new Date(2014, 2, 19),
    description: 'Aquarius Theater',
    category: 'entertainment',
    amount: 20
  },
  {
    id: 3,
    date: new Date(2014, 2, 18),
    description: 'Crepe House',
    category: 'food',
    amount: 10.77
  },
  {
    id: 4,
    date: new Date(2014, 2, 1),
    description: 'Check 191',
    category: 'UNCATEGORIZED',
    amount: 1510
  },
];

export default Transaction;
