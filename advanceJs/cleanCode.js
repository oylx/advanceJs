/**
 * bad
 * @param comparisonArray
 * @returns {Array}
 */
Array.prototype.diff = function diff(comparisonArray) {
 const hash = new Set(comparisonArray);
 return this.filter(elem => !hash.has(elem));
};

/**
 * Polluting globals is a bad practice in JavaScript because you could clash with another library and the user of your API would be none-the-wiser until they get an exception in production. Let's think about an example: what if you wanted to extend JavaScript's native Array method to have a diff method that could show the difference between two arrays? You could write your new function to the Array.prototype, but it could clash with another library that tried to do the same thing. What if that other library was just using diff to find the difference between the first and last elements of an array? This is why it would be much better to just use ES2015/ES6 classes and simply extend the Array global.
 */
class SuperArray extends Array {
 diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter(elem => !hash.has(elem));
 }
}

/**
 * bad
 */
function negativeConditions() {
 function isDOMNodeNotPresent(node) {
  // ...
 }

 if (!isDOMNodeNotPresent(node)) {
  // ...
 }
}

/**
 * good
 */
function negativeContions1() {
 function isDOMNodePresent(node) {
  // ...
 }

 if (isDOMNodePresent(node)) {
  // ...
 }
}

/**
 * bad
 */
class Airplane {
 // ...
 getCruisingAltitude() {
  switch (this.type) {
   case "777":
    return this.getMaxAltitude() - this.getPassengerCount();
   case "Air Force One":
    return this.getMaxAltitude();
   case "Cessna":
    return this.getMaxAltitude() - this.getFuelExpenditure();
  }
 }
}

/**
 * good
 */
class Airplane {
 // ...
}

class Boeing777 extends Airplane {
 // ...
 getCruisingAltitude() {
  return this.getMaxAltitude() - this.getPassengerCount();
 }
}

class AirForceOne extends Airplane {
 // ...
 getCruisingAltitude() {
  return this.getMaxAltitude();
 }
}

class Cessna extends Airplane {
 // ...
 getCruisingAltitude() {
  return this.getMaxAltitude() - this.getFuelExpenditure();
 }
}

// On old browsers, each iteration with uncached `list.length` would be costly
// because of `list.length` recomputation. In modern browsers, this is optimized.
for (let i = 0, len = list.length; i < len; i++) {
 // ...
}

/**
 * good
 * Modern browsers do a lot of optimization under-the-hood at runtime. A lot of times, if you are optimizing then you are just wasting your time. There are good resources for seeing where optimization is lacking. Target those in the meantime, until they are fixed if they can be.
 */
for (let i = 0; i < list.length; i++) {
 // ...
}

/**
 * bad
 * @returns {{balance: number}}
 */
function makeBankAccount() {
 // ...

 return {
  balance: 0
  // ...
 };
}

const account = makeBankAccount();
account.balance = 100;

/**
 * good
 * @returns {{getBalance: (function(): number), setBalance: setBalance}}
 */
function makeBankAccount1() {
 // this one is private
 let balance = 0;

 // a "getter", made public via the returned object below
 function getBalance() {
  return balance;
 }

 // a "setter", made public via the returned object below
 function setBalance(amount) {
  // ... validate before updating the balance
  balance = amount;
 }

 return {
  // ...
  getBalance,
  setBalance
 };
}

const account1 = makeBankAccount1();
account1.setBalance(100);







