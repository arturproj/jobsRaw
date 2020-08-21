require('dotenv').config();

const { PORT, DB_HOST, DB_NAME, DB_PORT } = process.env;

const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const port = PORT || 3000;

const jobsRawRoute = require('./routes/jobRaw');

////////////////////////////////////////////////////////////////
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
////////////////////////////////////////////////////////////////
app.get('/favicon.ico', (req, res) => {
    console.log(':GET:',req.url)    
});

app.use('/', jobsRawRoute);


////////////////////////////////////////////////////////////////
app.put('*', (req, res) => {
    console.log('GET', req.url)
    res.json({status : 404, message : "Page not found"});
});

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});