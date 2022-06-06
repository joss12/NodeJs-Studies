//Modules - encapsulation Code (only  share minimum)
//CommonJS , every file in node is a module(bydefault)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
sayHi('Stan');
sayHi(names.eddy);
sayHi(names.grace);
