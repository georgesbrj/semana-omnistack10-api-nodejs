// importando o express micro frame
const express = require ('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

//criando a variavel constante app express 
const app = express();


// criando a conexao com o mongo db
mongoose.connect('mongodb+srv://omnistack:<omnistack>@cluster0-hrl29.mongodb.net/test?retryWrites=true&w=majority' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//para fazer com que o express intenda o formato request
app.use(cors({orig: 'http://localhost:porta'}));
app.use(routes);
app.use(express.json());



//direcioando a porta 
app.listen(3333);
