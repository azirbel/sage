export default Ember.Controller.extend({
  assets: [
    {
      "label": "Chase Checking",
      "value": 27000,
    },
    {
      "label": "Tesla Stock",
      "value": 3400,
    },
    {
      "label": "Addepar Stock",
      "value": 2000,
    },
    {
      "label": "2007 Prius",
      "value": 16000,
    },
    {
      "label": "Kids Savings",
      "value": 12900,
    }
  ],

  lineData: [
    {
      time: d3.time.format('%Y-%m-%d').parse("2013-10-01"),
      label: "Net Worth",
      value: 35000
    },
    {
      time: d3.time.format('%Y-%m-%d').parse("2013-10-15"),
      label: "Net Worth",
      value: 36000
    },
    {
      time: d3.time.format('%Y-%m-%d').parse("2013-11-01"),
      label: "Net Worth",
      value: 38000
    },
    {
      time: d3.time.format('%Y-%m-%d').parse("2013-11-15"),
      label: "Net Worth",
      value: 39000
    },
    {
      time: d3.time.format('%Y-%m-%d').parse("2013-12-01"),
      label: "Net Worth",
      value: 37000
    },
    {
      time: d3.time.format('%Y-%m-%d').parse("2013-12-15"),
      label: "Net Worth",
      value: 38000
    },
    {
      time: d3.time.format('%Y-%m-%d').parse("2014-01-01"),
      label: "Net Worth",
      value: 38000
    },
    {
      time: d3.time.format('%Y-%m-%d').parse("2014-01-15"),
      label: "Net Worth",
      value: 40000
    },
    {
      time: d3.time.format('%Y-%m-%d').parse("2014-02-01"),
      label: "Net Worth",
      value: 45000
    },
    {
      time: d3.time.format('%Y-%m-%d').parse("2014-02-15"),
      label: "Net Worth",
      value: 44000
    },
    {
      time: d3.time.format('%Y-%m-%d').parse("2014-03-01"),
      label: "Net Worth",
      value: 46000
    },
    {
      time: d3.time.format('%Y-%m-%d').parse("2014-03-15"),
      label: "Net Worth",
      value: 47321
    }
  ],
});
