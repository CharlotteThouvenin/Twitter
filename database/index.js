const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://charlotte:charlotte@cluster0.z36rcvr.mongodb.net/Twitter?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('connexion db réussie!'))
    .catch((err) => {
        console.log(err)
    })