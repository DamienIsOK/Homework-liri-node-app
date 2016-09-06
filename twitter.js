// ========== TWITTER ==========

// Save the document I want to reference to a variable and make it required
var myTwitter = require('./keys.js');
var twitterObj = require('twitter');

// Save the keys from my keys.js doc to their own variables
// Use dot notation to access each value (myTwitter = variable for file, twitterKeys = object name)
var consumer_key = myTwitter.twitterKeys.consumer_key;
var consumer_secret = myTwitter.twitterKeys.consumer_secret;
var access_key = myTwitter.twitterKeys.access_token_key;
var access_secret = myTwitter.twitterKeys.access_token_secret;

// Logging all to make sure it works
console.log("Consumer Key: " + consumer_key);
console.log("Consumer Secret: " + consumer_secret);
console.log("Access Token Key: " + access_key);
console.log("Access Token Secret: " + access_secret);

// No idea wha this does. It was lifted directly from the NPM Twitter docs.
// When I tried to use the exported object from keys.js, I was unable to log it, so I tried this
var client = new twitterObj({
  consumer_key: 'EbCcVbk7l64zST6bkc4ivFEuh',
  consumer_secret: 'LkahW3POENTGun95KFe3q5l2gYkwxEP8hwmei0ginILn1OOVWU',
  access_token_key: '770809784337518593-4zr4QI7xHRDwYe1UQISnRGDEomXthJN',
  access_token_secret: 'EG9LiSa2uA0nd3okISZGpasmyvmXnkH9LPuk3J4csNQAO',
});

var params = {screen_name: ' '};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error && process.argv[2] == 'my-tweets') {

  	for(var i=0; i<tweets.length; i++){
  	console.log("=======================================================")
    console.log("Tweet: " + tweets[i].text);
    console.log("Time: " + tweets[i].created_at);

  	}
  }

});

// console.log("twitterObj" + JSON.stringify(client, null, 2));
