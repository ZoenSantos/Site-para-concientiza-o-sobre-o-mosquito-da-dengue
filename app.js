const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = 8001;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/contato', (req, res) => { 
    res.render('contato.ejs');
});

app.get('/dicas', (req, res) => { 
    res.render('dicas.ejs');
});

app.get('/graficos', (req, res) => { 
    res.render('quantidade.ejs');
});

app.listen(port, () => {
    console.log(`Servidor em execução na porta ${port}`);
});
