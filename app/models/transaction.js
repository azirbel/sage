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
  {
    id: 5,
    date: new Date(2014, 2, 20),
    description: 'Asian Box',
    category: 'food',
    amount: 9.68
  },
  {
    id: 6,
    date: new Date(2014, 2, 19),
    description: 'Aquarius Theater',
    category: 'entertainment',
    amount: 20
  },
  {
    id: 7,
    date: new Date(2014, 2, 18),
    description: 'Crepe House',
    category: 'food',
    amount: 10.77
  },
  {
    id: 8,
    date: new Date(2014, 2, 1),
    description: 'Check 191',
    category: 'UNCATEGORIZED',
    amount: 1510
  },
  {
    id: 9,
    date: new Date(2014, 2, 20),
    description: 'Asian Box',
    category: 'food',
    amount: 9.68
  },
  {
    id: 10,
    date: new Date(2014, 2, 19),
    description: 'Aquarius Theater',
    category: 'entertainment',
    amount: 20
  },
  {
    id: 11,
    date: new Date(2014, 2, 18),
    description: 'Crepe House',
    category: 'food',
    amount: 10.77
  },
  {
    id: 12,
    date: new Date(2014, 2, 1),
    description: 'Check 191',
    category: 'UNCATEGORIZED',
    amount: 1510
  },
  {
    id: 13,
    date: new Date(2014, 2, 20),
    description: 'Asian Box',
    category: 'food',
    amount: 9.68
  },
  {
    id: 14,
    date: new Date(2014, 2, 19),
    description: 'Aquarius Theater',
    category: 'entertainment',
    amount: 20
  },
  {
    id: 15,
    date: new Date(2014, 2, 18),
    description: 'Crepe House',
    category: 'food',
    amount: 10.77
  },
  {
    id: 16,
    date: new Date(2014, 2, 1),
    description: 'Check 191',
    category: 'UNCATEGORIZED',
    amount: 1510
  },
  {
    id: 17,
    date: new Date(2014, 2, 20),
    description: 'Asian Box',
    category: 'food',
    amount: 9.68
  },
  {
    id: 18,
    date: new Date(2014, 2, 19),
    description: 'Aquarius Theater',
    category: 'entertainment',
    amount: 20
  },
  {
    id: 19,
    date: new Date(2014, 2, 18),
    description: 'Crepe House',
    category: 'food',
    amount: 10.77
  },
  {
    id: 20,
    date: new Date(2014, 2, 1),
    description: 'Check 191',
    category: 'UNCATEGORIZED',
    amount: 1510
  },
  {
    id: 21,
    date: new Date(2014, 2, 20),
    description: 'Asian Box',
    category: 'food',
    amount: 9.68
  },
  {
    id: 22,
    date: new Date(2014, 2, 19),
    description: 'Aquarius Theater',
    category: 'entertainment',
    amount: 20
  },
  {
    id: 23,
    date: new Date(2014, 2, 18),
    description: 'Crepe House',
    category: 'food',
    amount: 10.77
  },
  {
    id: 24,
    date: new Date(2014, 2, 1),
    description: 'Check 191',
    category: 'UNCATEGORIZED',
    amount: 1510
  },
];

export default Transaction;
