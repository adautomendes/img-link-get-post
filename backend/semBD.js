var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var util = require('./util.js');

var app = express();

var delay = 5; //Tempo em segundos que simulará o tempo de atraso pelo servidor

var vetImg = [
    {
        "img_id": 1,
        "nome": "Coxinha",
        "url": "https://1344552651.rsc.cdn77.org/prod/imagens/receita/22704/coxinhasemmassa-30543.jpg"
    },
    {
        "img_id": 2,
        "nome": "Temaki",
        "url": "https://s3.amazonaws.com/pu-mgr/default/a0R0f00000wsjHMEAY/59d555ade4b0b7b0bacf4af1.jpg"
    },
    {
        "img_id": 3,
        "nome": "Lasanha",
        "url": "https://guiadacozinha.com.br/wp-content/uploads/2017/07/lasanha-%C3%A0-bolonhesa-e-4-queijos.jpg"
    }
]

var countId = 3;

function salvarImagem(req, res, next) {
    countId++;

    var imagem = {
        img_id: countId,
        nome: req.body.nome,
        url: req.body.url
    };

    vetImg.push(imagem);

    util.rndDelay(delay);
    res.json(imagem)
    next();
}

function listarImagem(req, res, next) {
    util.rndDelay(delay);
    res.json(vetImg);
    next();
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

