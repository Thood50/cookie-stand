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
    for (var i = 0; i < globalTime.length; i++) {
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

var secondStore = {
  storeName: 'Sea Tac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgSale: 1.2,
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
    for (var i = 0; i < globalTime.length; i++) {
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

var thirdStore = {
  storeName: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgSale: 3.7,
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
    for (var i = 0; i < globalTime.length; i++) {
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

var fourthStore = {
  storeName: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgSale: 2.3,
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
    for (var i = 0; i < globalTime.length; i++) {
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

var fifthStore = {
  storeName: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgSale: 4.6,
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
    for (var i = 0; i < globalTime.length; i++) {
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

var storesArray = [firstStore, secondStore, thirdStore, fourthStore, fifthStore];
function loopingStores() {
  for(var i = 0; i < storesArray.length; i++) {
    storesArray[i].getAvgCustomersHour();
    storesArray[i].getArraySum();
    storesArray[i].getAvgCookiesHour();
    storesArray[i].render();
    storesArray[i].total();
    console.log('Average Customers per Hour ' + storesArray[i].avgCustomersHour);
    console.log('Average Cookies per Hour ' + storesArray[i].avgCookiesHour);
    console.log(storesArray[i].cookiesArray);
    console.log(storesArray[i].totalCookies);
  }
};

loopingStores();
