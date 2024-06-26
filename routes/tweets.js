const router = require('express').Router();
const { tweetList, tweetNew, tweetCreate, tweetDelete, tweetEdit, tweetUpdate } = require('../controllers/tweets.controller');
const Tweet = require('../database/models/tweet.model');

router.get('/', tweetList)
router.get('/new', tweetNew)
router.post('/', tweetCreate);
router.delete('/:tweetId', tweetDelete);
router.get('/edit/:tweetId', tweetEdit);
router.post('/update/:tweetId', tweetUpdate);
module.exports = router;