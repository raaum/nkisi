// pull in constants file
var constants = require('../constants');

/*

Anything that should be specifically for the N'kisi store 
should go inside this object.

- we want to override the default initilization function
- we want the store to listen to specific actions in our system
- we can do that though this.bind

Listen to and perform an action when new messages enter the 
system coming from our server on the backend.  Whenever a 
message that a user creates is sent to the server and saved, 
it will come back as constants.NKISIED.

*/

var NkisiStore = module.exports = require('./store').extend({
  init: function () {
    this.bind(constants.GOT_NKISI, this.set);
    this.bind(constants.NKISIED, this.add);
  }
});