// ======= SPOTIFY ============

var spotify = require('spotify');
var query = process.argv[2];

spotify.search({ type: 'track', query }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    } else {
    	// for(var i=0; i<data.length; i++){
    	// console.log(JSON.stringify(data, null, 2));
    	console.log("Musician: " + data.tracks.items[0].artists[0].name);
     	console.log("Track: " + data.tracks.items[0].name);
    	console.log("Album: " + data.tracks.items[0].album.name);
    	console.log("Preview: " + data.tracks.items[0].preview_url);
    	// }

    }
 
});