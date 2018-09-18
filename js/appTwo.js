'use strict';


var globalTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstStore = {
  storeName: 'First and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  avgCustomersHour: [],
  totalCustomersDay: 0,
  avgCookiesHour: 0,
  cookiesArray: [],
  totalCookies: 0,
  getRandomNum: function(min, max) {
    return Math.random() * (max - min) + min;
  },
  getAvgCustomersHour: function() {
    for (var i = 0; i < globalTime.length; i++) {
      this.avgCustomersHour = this.getRandomNumber(this.minCustomers, this.maxCustomers)
    }
  },
  getArraySum: function() {
    for (var i = 0; i < this.avgCustomersHour.length; i++) {
      this.totalCustomersDay += this.avgCustomersHour[i];
    }
  },
  getAvgCookiesHour: function () {
    this.avgCookiesHour = (this.totalCustomersDay * this.avgSale)/globalTime.length;

  },
  getTotalCookies: function() {
    this.totalCookies = this.totalCustomersDay * this.avgSale;
  },
  render: function () {
    for (var i = 0; i < days.length; i++) {
      var newEl = document.createElement('li');
      newEl.textContent = globalTime[i] + ' - ' + this.avgCookiesHour;
      var newUl = document.getElementById(this.storeName);
      newUl.appendChild(newEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.totalCustomersDay * this.avgSale;
    var newEl = document.createElement('li');
    newEl.textContent = 'Total ' + this.totalCookies;
    var newUl = document.getElementById(this.storeName);
    newUl.appendChild(newEl);
  }
};



firstStore.getAvgCustomersHour();
firstStore.getAvgCookiesHour();
firstStore.render();
firstStore.total();
console.log('Average Customers per Hour ' + firstStore.avgCustomersHour);
console.log('Average Cookies per Hour ' + firstStore.avgCookiesHour);
console.log(firstStore.cookiesArray);
console.log(firstStore.totalCookies);
