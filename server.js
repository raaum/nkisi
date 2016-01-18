var express = require('express');

/*
Use the express server with EJS view engine

EJS is a client-side templating language

Serve requests for static files located in /public

For all other request serve index

Listen on port 3333
*/

express()
  .set('view engine', 'ejs')
  .use(express.static('./public'))
  .get('*', function(req, res) {
    res.render('index');
  })
  .listen(3333);
