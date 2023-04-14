const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const ejs = require('ejs');
const app = express();
const port = 2500;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/panel', (req, res) => {
    let data = 'messi';
    res.render('panel', { data });
});

app.post('/cargar', (req, res) => {
    res.send('Hello ' + req.body.nombre);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
