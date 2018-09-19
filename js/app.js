'use strict';

var Stores = function(name, minCust, maxCust, avgSale) {
  this.storeName = name;
  this.minCustomers = minCust;
  this.maxCustomers = maxCust;
  this.avgSale = avgSale;
  this.avgCustomersHour = [];
  this.avgCookiesHour = [];
  this.totalCookies = 0;
  Stores.list.push(this);
};

Stores.list = [];
Stores.total = [];
var globalTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

Stores.prototype.getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

Stores.prototype.getAvgCustomersHour = function() {
  for (var i = 0; i < globalTime.length; i++) {
    var customers = this.getRandomNumber(this.minCustomers, this.maxCustomers);
    this.avgCustomersHour.push(customers);
  }
};

Stores.prototype.getAvgCookiesHour = function () {
  for(var i = 0; i < this.avgCustomersHour.length; i++) {
    var hourlyCookies = (this.avgCustomersHour[i] * this.avgSale);
    this.avgCookiesHour.push(Math.floor(hourlyCookies));
  }
},

Stores.prototype.getArraySum = function() {
  for (var i = 0; i < this.avgCookiesHour.length; i++) {
    this.totalCookies += this.avgCookiesHour[i];
  }
},

Stores.prototype.render = function () {
  var asdf = document.getElementsByTagName('table');
  var tbody = document.createElement('tbody');
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  
  var storeName = document.createTextNode(this.storeName);

  th.appendChild(storeName);
  tr.appendChild(th);
  tbody.appendChild(tr);
  asdf[0].appendChild(tbody);

  for (var i = 0; i < globalTime.length; i++) {
    var td = document.createElement('td');
    var cookieSales = document.createTextNode(this.avgCookiesHour[i]);
    td.appendChild(cookieSales);
    tr.appendChild(td);
  } 
  var td = document.createElement('td');
  var totalCookies = document.createTextNode(this.totalCookies);
  td.appendChild(totalCookies);
  tr.appendChild(td);
};

Stores.prototype.getTotalHourlyCookies = function () {
  for(var i = 0; i < globalTime.length; i++) {
    var sum = 0;
    for(var k = 0; k < Stores.list.length; k++) {
      sum +=Stores.list[k].avgCookiesHour[i];
    }
    Stores.total.push(sum);
  }
};

function renderHeader() {
  var asdf = document.getElementsByTagName('table');
  var thead = document.createElement('thead');
  var tr = document.createElement('tr');
  var th = document.createElement('th');

  tr.appendChild(th);
  thead.appendChild(tr);
  asdf[0].appendChild(thead);

  var storeLocations = document.createTextNode('Locations');
  th.appendChild(storeLocations);
  tr.appendChild(th);

  for (var i = 0; i < globalTime.length; i++) {
    th = document.createElement('th');
    var hoursOfOperation = document.createTextNode(globalTime[i]);
    th.appendChild(hoursOfOperation);
    tr.appendChild(th);
  }

  var totalCookies = document.createTextNode('Total');
  th = document.createElement('th');
  th.appendChild(totalCookies);
  tr.appendChild(th);
};

function renderFooter() {
  var asdf = document.getElementsByTagName('table');
  var tfoot = document.createElement('tfoot');
  var tr = document.createElement('tr');
  var th = document.createElement('th')

  tr.appendChild(th);
  tfoot.appendChild(tr);
  asdf[0].appendChild(tfoot);

  var hourlyTotals = document.createTextNode('Hourly Totals');
  th.appendChild(hourlyTotals);
  tr.appendChild(th);

  for(var i = 0; i < globalTime.length; i++) {
    th = document.createElement('th');
    var hourlyCookiesSold = document.createTextNode(Stores.total[i]);
    th.appendChild(hourlyCookiesSold);
    tr.appendChild(th);
  }
};

var firstStore = new Stores('First and Pike', 23, 65, 6.3);
var secondStore = new Stores('SeaTac Airport', 3, 24, 1.2);
var thirdStore = new Stores('Seattle Center', 11, 38, 3.7);
var fourthStore = new Stores('Capitol Hill', 20, 38, 2.3);
var fifthStore = new Stores('Alki', 2, 16, 4.6);

function loopingStores() {
  renderHeader();
  for(var i = 0; i < Stores.list.length; i++) {
    Stores.list[i].getAvgCustomersHour();
    Stores.list[i].getAvgCookiesHour();
    Stores.list[i].getArraySum();
    Stores.list[i].render();
    console.log('Average Customers per Hour ' + Stores.list[i].avgCustomersHour);
    console.log('Average Cookies per Hour ' + Stores.list[i].avgCookiesHour);
    console.log(Stores.list[i].totalCookies);
  }
  Stores.prototype.getTotalHourlyCookies();
  renderFooter();
};

loopingStores();
