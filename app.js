
const express = require('express');

const logger = require('morgan');

const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');


// ROUTES
const routes = require('./routes/index');
const users  = require('./routes/users');


const app = express()




// TEMPLATING ENGINE
app.set('views', './views');
app.set('view engine', 'pug');


app.use('/', routes);
app.use('/users', users);



// ROUTES
// app.get('/', function (req, res) {
//     res.render('index')
// });

// app.get('/register', function (req, res) {
//     res.render('register')
// });

// app.get('/login', function (req, res) {
//     res.render('login')
// });

// app.get('/nope', function (req, res) {
//     res.render('nope')
// });

// // recieve data from form
// app.post('/', function (req, res) {
// res.send('POST request to the homepage')
// });














// tell the server to listen on a specific port
app.listen(8000, function() {
    console.info('Server listening on port 8000!');
});