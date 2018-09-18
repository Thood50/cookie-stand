'use strict';

var locationArray = [];
var globalTime = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];

var customerPike = [];
var customerAirport = [];
var customerCenter = [];
var customerHill = [];
var customerAlki = [];

var pikeSum = 0;
var airportSum = 0;
var centerSum = 0;
var hillSum = 0;
var alkiSum = 0;

var pikeCookies = 6.3;
var airportCookies = 1.2;
var centerCookies = 3.7;
var hillCookies = 2.3;
var alkiCookies = 4.6;

var pikeTotal = 0;
var airportTotal = 0;
var centerTotal = 0;
var hillTotal = 0;
var alkiTotal = 0;

var firstAndPike = {
  minimumCustomers: 23,
  maximumCustomers: 65,
  averageCookies: 6.3,
  randomNum: function() {
    console.log('1st and Pike')
    for (var i = 0; i < globalTime.length; i++) {
      customerPike.push(
        getRandomNumber(23, 65)
      )
      console.log(globalTime[i] + ' - ' + customerPike[i]);
    }
  }

};



var seatacAirport = {
  minimumCustomers: 3,
  maximumCustomers: 24,
  averageCookies: 1.2,
  randomNum: function() {
    console.log('SeaTac Airport')
    for (var i = 0; i < globalTime.length; i++) {
      customerAirport.push(
        getRandomNumber(3, 24)
      )
      console.log(globalTime[i] + ' - ' + customerAirport[i]);
    }
  }
};

var seattleCenter = {
  minimumCustomers: 11,
  maximumCustomers: 38,
  averageCookies: 3.7,
  randomNum: function() {
    console.log('Seattle Center')
    for (var i = 0; i < globalTime.length; i++) {
      customerCenter.push(
        getRandomNumber(11, 38)
      )
      console.log(globalTime[i] + ' - ' + customerCenter[i]);
    }
  }
};

var capitolHill = {
  minimumCustomers: 20,
  maximumCustomers: 38,
  averageCookies: 2.3,
  randomNum: function() {
    console.log('Capitol Hill')
    for (var i = 0; i < globalTime.length; i++) {
      customerHill.push(
        getRandomNumber(20, 38)
      )
      console.log(globalTime[i] + ' - ' + customerHill[i]);
    }
  }
};

var alki = {
  minimumCustomers: 2,
  maximumCustomers: 16,
  averageCookies: 4.6,
  randomNum: function() {
    console.log('Alki')
    for (var i = 0; i < globalTime.length; i++) {
      customerAlki.push(
        getRandomNumber(2, 16)
      )
      console.log(globalTime[i] + ' - ' + customerAlki[i]);
    }
  }
};

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function arraySum(array, sum) {
  for (var i = 0; i < array.length; i++) {
  sum += array[i]
  }
  return sum;
};

function productSum(sum, avgCookies, total) {
  total = sum * avgCookies;
  locationArray.push(total);
}

function render() {
    for (var i = 0; i < days.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      var liEl = document.createElement('li');
      liEl.textContent = days[i] + ' ' + this.avgCookiesHour;
      var firstUl = document.getElementById('first');
      firstUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  }

firstAndPike.randomNum();
seatacAirport.randomNum();
seattleCenter.randomNum();
capitolHill.randomNum();
alki.randomNum();

pikeSum = arraySum(customerPike, pikeSum);
airportSum = arraySum(customerAirport, airportSum);
centerSum = arraySum(customerCenter, centerSum);
hillSum = arraySum(customerHill, hillSum);
alkiSum = arraySum(customerAlki, alkiSum);

productSum(pikeSum, pikeCookies, pikeTotal);
productSum(airportSum, airportCookies, airportTotal);
productSum(centerSum, centerCookies, centerTotal);
productSum(hillSum, hillCookies, hillTotal);
productSum(alkiSum, alkiCookies, alkiTotal);

console.log(locationArray);

