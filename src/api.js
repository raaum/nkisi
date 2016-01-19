var actions = require('./actions');

var API = module.exports = {
  fetchNkisi: function() {
    get('/api/nkisi').then(actions.gotNkisi.bind(actions));
  }
};

function get(url) {
  return fetch(url, {
    credentials: 'same-origin'
  }).then(function (res) {
      return res.json();
  });
}

