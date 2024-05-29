const mongoose = require('mongoose');

exports.clientPromise = mongoose
    .connect(
        'mongodb+srv://charlotte:charlotte@cluster0.z36rcvr.mongodb.net/Twitter?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then((client) => {
        console.log('Connected to MongoDB');
        return client;
    })
    .catch((err) => {
        console.log(err);
    });
