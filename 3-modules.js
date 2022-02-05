const names = require('./first-module')
const sayHi = require('./utils.js')
const data = require('./6-alternative-flavour')
require('./7-mind-granade')
//console.log(data);
console.log(names);
sayHi('chioma');
sayHi(names.john);