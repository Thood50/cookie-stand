'use strict';

var globalTime = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
var locationArray = [firstAndPike, seatacAirport, seattleCenter, capitolHill, alki]

var firstAndPike = {
  minimumCustomers: 0,
  maximumCustomers: 0,
  averageCookies: 0,
  randomNum: distributeRandomNumber
};

var seatacAirport = {
  minimumCustomers: 0,
  maximumCustomers: 0,
  averageCookies: 0,
  randomNum: distributeRandomNumber
};

var seattleCenter = {
  minimumCustomers: 0,
  maximumCustomers: 0,
  averageCookies: 0,
  randomNum: distributeRandomNumber
};

var capitolHill = {
  minimumCustomers: 0,
  maximumCustomers: 0,
  averageCookies: 0,
  randomNum: distributeRandomNumber
};

var alki = {
  minimumCustomers: 0,
  maximumCustomers: 0,
  averageCookies: 0,
  randomNum: distributeRandomNumber
};

function distributeRandomNumber() {
    for (var i = 0; i < locationArray.length; i++) {
        for(var k = 0; k < globalTime.length; k++) {
            this.minimumCustomers = getRandomNumber(23, 65);
            this.minimumCustomers = getRandomNumber(23, 65);
            this.averageCookies = getRandomNumber(1, 12);
            break;
        }
    }
};

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }