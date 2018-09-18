'use strict';

var Stores = function(name, minCust, maxCust, avgSale) {
  this.storeName = name;
  this.minCustomers = minCust;
  this.maxCustomers = maxCust;
  this.avgSale = avgSale;
  this.avgCustomersHour = [];
  this.avgCookiesHour = [];
  Stores.list.push(this);
};

Stores.list = [];
var globalTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

Stores.prototype.getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Stores.prototype.getAvgCustomersHour = function() {
  for (var i = 0; i < globalTime.length; i++) {
    var customers = this.getRandomNumber(this.minCustomers, this.maxCustomers);
    this.avgCustomersHour.push(customers);
  }
}

Stores.prototype.getArraySum = function() {
  for (var i = 0; i < this.avgCustomersHour.length; i++) {
    this.totalCustomersDay += this.avgCustomersHour[i];
  }
}

Stores.prototype.getAvgCookiesHour = function () {
  for(var i = 0; i < this.avgCustomersHour.length; i++) {
    var hourlyCookies = (this.avgCustomersHour[i] * this.avgSale);
    this.avgCookiesHour.push(Math.floor(hourlyCookies));
  }
}

Stores.prototype.getTotalCookies = function() {
  this.totalCookies = this.totalCustomersDay * this.avgSale;
}

Stores.prototype.render = function () {
  var body = document.getElementsByTagName('body')[0];
  var header = document.createElement('h2');
  var position = document.createElement('ul');
  header.textContent = this.storeName;
  body.appendChild(header);
  body.appendChild(position);
  for (var i = 0; i < globalTime.length; i++) {
    var newEl = document.createElement('li');
    newEl.textContent = globalTime[i] + ' - ' + this.avgCookiesHour[i];
    position.appendChild(newEl);
  }
}

Stores.prototype.total = function () {
  var newUl = document.createElement('ul');
  var newEl = document.createElement('li');
  newEl.textContent = 'Total ' + this.totalCookies;
  newUl.appendChild(newEl);
}
}










var firstStore = {
  storeName: 'First and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  avgCustomersHour: [],
  totalCustomers: 0,
  avgCookiesHour: [],
  totalCookies: 0,
  getRandomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getAvgCustomersHour: function() {
    for (var i = 0; i < globalTime.length; i++) {
      var customers = this.getRandomNumber(this.minCustomers, this.maxCustomers);
      this.avgCustomersHour.push(customers);
    }
  },
  getArraySum: function() {
    for (var i = 0; i < this.avgCustomersHour.length; i++) {
      this.totalCustomersDay += this.avgCustomersHour[i];
    }
  },
  getAvgCookiesHour: function () {
    for(var i = 0; i < this.avgCustomersHour.length; i++) {
      var hourlyCookies = (this.avgCustomersHour[i] * this.avgSale);
      this.avgCookiesHour.push(Math.floor(hourlyCookies));
    }
  },
  getTotalCookies: function() {
    this.totalCookies = this.totalCustomersDay * this.avgSale;
  },
  render: function () {
    var body = document.getElementsByTagName('body')[0];
    var header = document.createElement('h2');
    var position = document.createElement('ul');
    header.textContent = this.storeName;
    body.appendChild(header);
    body.appendChild(position);
    for (var i = 0; i < globalTime.length; i++) {
      var newEl = document.createElement('li');
      newEl.textContent = globalTime[i] + ' - ' + this.avgCookiesHour[i];
      position.appendChild(newEl);
    }
  },
  total: function () {
    var newUl = document.createElement('ul');
    var newEl = document.createElement('li');
    newEl.textContent = 'Total ' + this.totalCookies;
    newUl.appendChild(newEl);
  }
};

var secondStore = {
  storeName: 'Sea Tac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgSale: 1.2,
  avgCustomersHour: [],
  totalCustomers: 0,
  avgCookiesHour: [],
  totalCookies: 0,
  getRandomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getAvgCustomersHour: function() {
    for (var i = 0; i < globalTime.length; i++) {
      var customers = this.getRandomNumber(this.minCustomers, this.maxCustomers);
      this.avgCustomersHour.push(customers);
    }
  },
  getArraySum: function() {
    for (var i = 0; i < this.avgCustomersHour.length; i++) {
      this.totalCustomersDay += this.avgCustomersHour[i];
    }
  },
  getAvgCookiesHour: function () {
    for(var i = 0; i < this.avgCustomersHour.length; i++) {
      var hourlyCookies = (this.avgCustomersHour[i] * this.avgSale);
      this.avgCookiesHour.push(Math.floor(hourlyCookies));
    }
  },
  getTotalCookies: function() {
    this.totalCookies = this.totalCustomersDay * this.avgSale;
  },
  render: function () {
    var body = document.getElementsByTagName('body')[0];
    var header = document.createElement('h2');
    var position = document.createElement('ul');
    header.textContent = this.storeName;
    body.appendChild(header);
    body.appendChild(position);
    for (var i = 0; i < globalTime.length; i++) {
      var newEl = document.createElement('li');
      newEl.textContent = globalTime[i] + ' - ' + this.avgCookiesHour[i];
      position.appendChild(newEl);
    }
  },
  total: function () {
    var newUl = document.createElement('ul');
    var newEl = document.createElement('li');
    newEl.textContent = 'Total ' + this.totalCookies;
    newUl.appendChild(newEl);
  }
};

var thirdStore = {
  storeName: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgSale: 3.7,
  avgCustomersHour: [],
  totalCustomers: 0,
  avgCookiesHour: [],
  totalCookies: 0,
  getRandomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getAvgCustomersHour: function() {
    for (var i = 0; i < globalTime.length; i++) {
      var customers = this.getRandomNumber(this.minCustomers, this.maxCustomers);
      this.avgCustomersHour.push(customers);
    }
  },
  getArraySum: function() {
    for (var i = 0; i < this.avgCustomersHour.length; i++) {
      this.totalCustomersDay += this.avgCustomersHour[i];
    }
  },
  getAvgCookiesHour: function () {
    for(var i = 0; i < this.avgCustomersHour.length; i++) {
      var hourlyCookies = (this.avgCustomersHour[i] * this.avgSale);
      this.avgCookiesHour.push(Math.floor(hourlyCookies));
    }
  },
  getTotalCookies: function() {
    this.totalCookies = this.totalCustomersDay * this.avgSale;
  },
  render: function () {
    var body = document.getElementsByTagName('body')[0];
    var header = document.createElement('h2');
    var position = document.createElement('ul');
    header.textContent = this.storeName;
    body.appendChild(header);
    body.appendChild(position);
    for (var i = 0; i < globalTime.length; i++) {
      var newEl = document.createElement('li');
      newEl.textContent = globalTime[i] + ' - ' + this.avgCookiesHour[i];
      position.appendChild(newEl);
    }
  },
  total: function () {
    var newUl = document.createElement('ul');
    var newEl = document.createElement('li');
    newEl.textContent = 'Total ' + this.totalCookies;
    newUl.appendChild(newEl);
  }
};

var fourthStore = {
  storeName: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgSale: 2.3,
  avgCustomersHour: [],
  totalCustomers: 0,
  avgCookiesHour: [],
  totalCookies: 0,
  getRandomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getAvgCustomersHour: function() {
    for (var i = 0; i < globalTime.length; i++) {
      var customers = this.getRandomNumber(this.minCustomers, this.maxCustomers);
      this.avgCustomersHour.push(customers);
    }
  },
  getArraySum: function() {
    for (var i = 0; i < this.avgCustomersHour.length; i++) {
      this.totalCustomersDay += this.avgCustomersHour[i];
    }
  },
  getAvgCookiesHour: function () {
    for(var i = 0; i < this.avgCustomersHour.length; i++) {
      var hourlyCookies = (this.avgCustomersHour[i] * this.avgSale);
      this.avgCookiesHour.push(Math.floor(hourlyCookies));
    }
  },
  getTotalCookies: function() {
    this.totalCookies = this.totalCustomersDay * this.avgSale;
  },
  render: function () {
    var body = document.getElementsByTagName('body')[0];
    var header = document.createElement('h2');
    var position = document.createElement('ul');
    header.textContent = this.storeName;
    body.appendChild(header);
    body.appendChild(position);
    for (var i = 0; i < globalTime.length; i++) {
      var newEl = document.createElement('li');
      newEl.textContent = globalTime[i] + ' - ' + this.avgCookiesHour[i];
      position.appendChild(newEl);
    }
  },
  total: function () {
    var newUl = document.createElement('ul');
    var newEl = document.createElement('li');
    newEl.textContent = 'Total ' + this.totalCookies;
    newUl.appendChild(newEl);
  }
};

var fifthStore = {
  storeName: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgSale: 4.6,
  avgCustomersHour: [],
  totalCustomers: 0,
  avgCookiesHour: [],
  totalCookies: 0,
  getRandomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getAvgCustomersHour: function() {
    for (var i = 0; i < globalTime.length; i++) {
      var customers = this.getRandomNumber(this.minCustomers, this.maxCustomers);
      this.avgCustomersHour.push(customers);
    }
  },
  getArraySum: function() {
    for (var i = 0; i < this.avgCustomersHour.length; i++) {
      this.totalCustomersDay += this.avgCustomersHour[i];
    }
  },
  getAvgCookiesHour: function () {
    for(var i = 0; i < this.avgCustomersHour.length; i++) {
      var hourlyCookies = (this.avgCustomersHour[i] * this.avgSale);
      this.avgCookiesHour.push(Math.floor(hourlyCookies));
    }
  },
  getTotalCookies: function() {
    this.totalCookies = this.totalCustomersDay * this.avgSale;
  },
  render: function () {
    var body = document.getElementsByTagName('body')[0];
    var header = document.createElement('h2');
    var position = document.createElement('ul');
    header.textContent = this.storeName;
    body.appendChild(header);
    body.appendChild(position);
    for (var i = 0; i < globalTime.length; i++) {
      var newEl = document.createElement('li');
      newEl.textContent = globalTime[i] + ' - ' + this.avgCookiesHour[i];
      position.appendChild(newEl);
    }
  },
  total: function () {
    var newUl = document.createElement('ul');
    var newEl = document.createElement('li');
    newEl.textContent = 'Total ' + this.totalCookies;
    newUl.appendChild(newEl);
  }
};

function loopingStores() {
  for(var i = 0; i < storesArray.length; i++) {
    storesArray[i].getAvgCustomersHour();
    storesArray[i].getArraySum();
    storesArray[i].getAvgCookiesHour();
    storesArray[i].render();
    storesArray[i].total();
    console.log('Average Customers per Hour ' + storesArray[i].avgCustomersHour);
    console.log('Average Cookies per Hour ' + storesArray[i].avgCookiesHour);
    console.log(storesArray[i].totalCustomers);
    console.log(storesArray[i].totalCookies);
  }
};

loopingStores();
