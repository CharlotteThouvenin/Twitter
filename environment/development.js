const path = require('path')

module.exports = {
    dburl: 'mongodb+srv://charlotte:charlotte@cluster0.z36rcvr.mongodb.net/Twitter?retryWrites=true&w=majority&appName=Cluster0',
    cert: path.join(__dirname, '../ssl/cert.pem'),
    key: path.join(__dirname, '../ssl/key.pem')
}