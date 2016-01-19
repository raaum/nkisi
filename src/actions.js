var dispatcher = require('./dispatcher');
var constants = require('./constants');

/*
Instead of writing a function for each constant, we write 
one function to handle all.  If we add or remove constants 
later, we don't have to update this file.

function names:
- nkisi
- nkisied
- gotNkisi
- gotCurrentUser
- gotUsers
- follow
- unfollow
- unfollowed
*/

Object.keys(constants).forEach(function (key) {

  // convert constants to camel case
  var funcName = key.split('_').map(function (word, i) {
    if (i === 0) return word.toLowerCase();
    return word[0] + word.slice(1).toLowerCase();
  }).join('');

  exports[funcName] = function (data) {
    dispatcher.dispatch({
      actionType: constants[key],
      data: data
    });
  };
});

