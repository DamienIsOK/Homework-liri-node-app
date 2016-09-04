var myKeys = require('./keys.js');

var consumer_key = myKeys.twitterKeys.consumer_key;
var consumer_secret = myKeys.twitterKeys.consumer_secret;
var access_key = myKeys.twitterKeys.access_token_key;
var access_secret = myKeys.twitterKeys.access_token_secret;

console.log("Consumer Key: " + consumer_key);
console.log("Consumer Secret: " + consumer_secret);
console.log("Access Token Key: " + access_key);
console.log("Access Token Secret: " + access_secret);