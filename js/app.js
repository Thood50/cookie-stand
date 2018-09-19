'use strict';

var Stores = function(name, minCust, maxCust, avgSale) {
  this.storeName = name;
  this.minCustomers = parseInt(minCust);
  this.maxCustomers = parseInt(maxCust);
  this.avgSale = parseInt(avgSale);
  this.avgCustomersHour = [];
  this.avgCookiesHour = [];
  this.totalCookies = 0;
  Stores.list.push(this);
};

Stores.list = [];
Stores.total = [];
var globalTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var newForm = document.getElementById('form');

Stores.prototype.getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

Stores.prototype.getAvgCustomersHour = function() {
  for (var i = 0; i < globalTime.length; i++) {
    var customers = this.getRandomNumber(this.minCustomers, this.maxCustomers);
    this.avgCustomersHour.push(customers);
    (Stores.list);
  }
};

Stores.prototype.getAvgCookiesHour = function () {
  for(var i = 0; i < this.avgCustomersHour.length; i++) {
    var hourlyCookies = (this.avgCustomersHour[i] * this.avgSale);
    this.avgCookiesHour.push(Math.floor(hourlyCookies));
    (Stores.list);
  }
},

Stores.prototype.getArraySum = function() {
  for (var i = 0; i < this.avgCookiesHour.length; i++) {
    this.totalCookies += this.avgCookiesHour[i];
    (Stores.list);
  }
},

Stores.prototype.render = function () {
  var tbody = document.getElementsByTagName('tbody');
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  
  var storeName = document.createTextNode(this.storeName);

  th.appendChild(storeName);
  tr.appendChild(th);
  tbody[0].appendChild(tr);

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
  var thead = document.getElementsByTagName('thead');
  var tr = document.createElement('tr');
  var th = document.createElement('th');

  tr.appendChild(th);
  thead[0].appendChild(tr);

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
}

function renderFooter() {
  var tfoot = document.getElementsByTagName('tfoot');
  var tr = document.createElement('tr');
  var th = document.createElement('th');

  tr.appendChild(th);
  tfoot[0].appendChild(tr);

  var hourlyTotals = document.createTextNode('Hourly Totals');
  th.appendChild(hourlyTotals);
  tr.appendChild(th);

  for(var i = 0; i < globalTime.length; i++) {
    th = document.createElement('th');
    var hourlyCookiesSold = document.createTextNode(Stores.total[i]);
    th.appendChild(hourlyCookiesSold);
    tr.appendChild(th);
  }
}

function addNewStore(event) {
  event.preventDefault();

  var storeName = event.target.storeName.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgSale = event.target.avgSold.value;
  var storeTable = document.getElementById('storeTable');

  var newStore = new Stores(storeName, minCust, maxCust, avgSale);

  newStore.getAvgCustomersHour();
  newStore.getAvgCookiesHour();
  newStore.getArraySum();
  storeTable.innerHTML = '';
  loopingStores();
}

function loopingStores() {
  renderHeader();
  for(var i = 0; i < Stores.list.length; i++) {
    Stores.list[i].render();
  }
  Stores.prototype.getTotalHourlyCookies();
  renderFooter();
}

function collectData() {
  for(var i = 0; i < Stores.list.length; i++) {
    Stores.list[i].getAvgCustomersHour();
    Stores.list[i].getAvgCookiesHour();
    Stores.list[i].getArraySum();
  }
}

var firstStore = new Stores('First and Pike', 23, 65, 6.3);
var secondStore = new Stores('SeaTac Airport', 3, 24, 1.2);
var thirdStore = new Stores('Seattle Center', 11, 38, 3.7);
var fourthStore = new Stores('Capitol Hill', 20, 38, 2.3);
var fifthStore = new Stores('Alki', 2, 16, 4.6);

newForm.addEventListener('submit', addNewStore);

collectData();
loopingStores();
