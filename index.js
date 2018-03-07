const request = require('request');
const path = require('path');
const config = require('./config');
const analyze = require('./analyze');

function start(){
	request(config.url, function(err, res, body){
		console.log('error:', error); // Print the error if one occurred
  		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  		console.log('body:', body); // Print the HTML for the Google homepage.

  		analyze.findImg(body);
	});
}