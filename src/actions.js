var dispatcher = require('./dispatcher');
var constants = require('./constants');

Object.keys(constants).forEach(function (key) {
// convert to camel case

  var funcName = key.split('_').map(function (word, i) {
    if (i === 0) return word.toLowerCase();
    return word[0] + word.slice(1).toLowerCase();

  });
  console.log(funcName)
});

/*
exports.nkisi = function(data) {
  dispatcher.dispatch({
    actionType: constants.NKISI,
    data: data
  });
};
*/