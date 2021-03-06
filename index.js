const request = require('request');
const path = require('path');
const config = require('./config');
const analyze = require('./analyze');
const fs = require('fs');

function start(){
	request(config.url, function(error, response, body){
		// console.log('error:', error); // Print the error if one occurred
  // 		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // 		console.log('body:', body); // Print the HTML for the Google homepage.

  		if (!error && response.statusCode == 200) {
			analyze.findImg(body, download);       
		}
  		
	});
}

function download(imgUrl, i){
	
	console.log(imgUrl != '');
	if(imgUrl != ''){
		let ext = imgUrl.split('.').pop();
		request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgDir, i+'.'+ext)));
	}
	
}

start();