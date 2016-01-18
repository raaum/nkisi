var express = require('express');

/*

Use the Express Server and EJS view engine

- Serve requests for static files located in '/public'
- For all other requests serve 'index'
- Listen on port 3333

*/

express()
  .set('view engine', 'ejs')
  .use(express.static('./public'))
  .get('*', function(req, res) {
    res.render('index');
  })
  .listen(3333);
