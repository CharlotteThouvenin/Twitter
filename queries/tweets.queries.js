const Tweet = require('../database/models/tweet.model')

exports.getTweets = () => {
    return Tweet.find({}).exec()
}

exports.createTweet = (tweet) => {
    const newTweet = new Tweet(tweet);
    return newTweet.save();
}

exports.deleteTweet = (tweetId) => {
    return Tweet.findByIdAndDelete(tweetId)
}

exports.getTweet = (tweetId) => {
    return Tweet.findOne({ _id: tweetId }).exec();
}

exports.tweetNew = (req, res, next) => {
    res.render('tweets/tweet-form', { tweet: {} });
}

exports.updateTweet = (tweetId, tweet) => {
    return Tweet.findByIdAndUpdate(tweetId, { $set: tweet }, { runValidators: true });
}

exports.getCurrentUserTweetsWithFollowing = (user) => {
    return Tweet.find({ author: { $in: [...user.following, user._id] } }).populate('author')
}

exports.getUserTweetFromUsername = (authorId) => {
    return Tweet.find({ author: authorId }).populate('author')
}