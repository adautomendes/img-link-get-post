var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql = require('mysql');
var util = require('./util.js');

var app = express();

var con = {
    host: 'localhost',
    user: 'root',
    pass: '',
    database: 'img-link-get-post'
}

var delay = 3; //Tempo em segundos que simulará o tempo de atraso pelo servidor

function salvarImagem(req, res, next) {
    var connection = mysql.createConnection(con);
    connection.connect();

    var imagem = {
        nome: req.body.nome,
        url: req.body.url
    };

    var strQuery = "INSERT INTO imagem (nome, url) VALUES ('"+imagem.nome+"','"+imagem.url+"');";
    util.printSQL(strQuery);

    connection.query(strQuery, function (err, rows, fields) {
        if (!err) {
            util.rndDelay(delay);
            res.json(rows);
        } else {
            res.json(err);
        }
        connection.end();
        next();
    });
}

function listarImagem(req, res, next) {
    var connection = mysql.createConnection(con);
    connection.connect();

    var strQuery = "SELECT img_id, nome, url FROM imagem;";
    util.printSQL(strQuery);

    connection.query(strQuery, function (err, rows, fields) {
        if (!err) {
            util.rndDelay(delay);
            res.json(rows);
        } else {
            res.json(err);
        }
        connection.end();
        next();
    });
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var imagem = '/imagem';

app.post(imagem + '/salvar', salvarImagem); //Endpoint para salvar imagem (POST)
app.get(imagem + '/listar', listarImagem); //Endpoint para listar imagens (GET)

app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000!');
});

