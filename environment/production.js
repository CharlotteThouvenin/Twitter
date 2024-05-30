const path = require('path')

module.exports = {
    dburl: 'mongodb+srv://charlotte:charlotte@cluster0.z36rcvr.mongodb.net/Twitter?retryWrites=true&w=majority&appName=Cluster0',
    cert: '/etc/letsencrypt/live/www.charlottethouvenin-dev.fr/fullchain.pem',
    key: '/etc/letsencrypt/live/www.charlottethouvenin-dev.fr/privkey.pem',
    portHttp: 80,
    portHttps: 443
}