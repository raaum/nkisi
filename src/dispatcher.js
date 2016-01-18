var flux = require('flux');

var dispatcher = module.exports new flux.Dispatcher();

/* 
Log dispatcher activity to the terminal upon receipt
of a new action so we can be aware of the activity
*/

dispatcher.register(function (action) {
  console.log(action);
});