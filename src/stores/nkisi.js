// pull in constants file
var constants = require('../constants');

var NkisiStore = module.exports = require('./store').extend({
  init: function () {
    this.bind(constants.GOT_NKISI, this.set);
    this.bind(constants.NKISIED, this.add);
  }
});