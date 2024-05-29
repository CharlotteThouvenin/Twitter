const router = require('express').Router();
const { ensureAuthenticated } = require('../config/guards.config')
const tweets = require('./tweets')
const users = require('./users')
const auth = require('./auth')

router.use('/tweets', ensureAuthenticated, tweets);
router.use('/users', users);
router.use('/auth', auth)

router.get('/', (req, res) => {
    res.redirect('/tweets');
})

module.exports = router;