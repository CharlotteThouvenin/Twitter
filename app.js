const express = require('express');
const path = require('path');
const morgan = require('morgan');
const index = require('./routes')
require('./database');
const errorHandler = require('errorhandler')

const app = express();

// variable d'enrironnement pour le port
const port = process.env.PORT || 3000;


app.set('views', path.join(__dirname, 'views')); // récupérer les layout pug
app.set('view engine', 'pug'); // transcrire les .pug en html


app.use(morgan('short')); // récupérer des données sur les requêtes dans la console
app.use(express.static(path.join(__dirname, 'public'))) // permet de récupérer les fichiers
app.use(express.json()); // parser facilement les body encodés en json ou en urlencoded et de les mettre sur l'objet req.body :
app.use(express.urlencoded({ extended: true })) // idem

app.use(index); // points d'entrée des routes

if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler());
} else {
    app.use((err, res, req, next) => {
        const code = err.code || 500
        res.status(code).json({
            code: code,
            message: code === 500 ? null : err.message
        })
    })
}

app.listen(port)