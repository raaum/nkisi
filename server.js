var express  = require('express');
var login    = require('./login');

/*

Use the Express Server and EJS view engine

- Serve requests for static files located in '/public'
- For all other requests serve 'index'
- Listen on port 3333

*/

express()
  .set('view engine', 'ejs')
  .use(express.static('./public'))
  .use(login.routes)
  .get('*', login.required, function (req, res) {
    res.render('index', {
    	user: login.safe(req.user)
    });
  })
  .listen(3333);
