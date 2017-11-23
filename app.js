const config = require('./config.json');
const speedTest = require('speedtest-net');
var Twitter = require('twitter');
var twitterClient = new Twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret
});
const sppedTest = speedTest({maxTime: parseInt(config.timeToTest, 10)});     //set max time to test   

sppedTest.on('data', data => { //do once before going on interval.
  console.log(`output: ${data.speeds.download}`);
  if (parseInt(data.speeds.download, 10) < parseInt(config.expectSpeed, 10)) { //if tested speed is less than expected speed, send tweet.
    twitterClient.post('statuses/update', {status: `@${config.ISP} Why is my download speed under ${config.expectSpeed} Mbit/s like i'm paying for? I just tested it and got ${Math.round(data.speeds.download)} Mbits/s.`}, function(error, tweet, response) {
      //tweet will contain information about the tweet sent, if it sends
      if (error) {
        console.log(error) //log error if there is one
      }
    });
  }
});

setInterval(function() {
  sppedTest.on('data', data => {
    console.log(`output: ${data.speeds.download}`);
    if (parseInt(data.speeds.download, 10) < parseInt(config.expectSpeed, 10)) { //if tested speed is less than expected speed, send tweet.
      twitterClient.post('statuses/update', {status: `@${config.ISP} Why is my download speed under ${config.expectSpeed} Mbits/s like i'm paying for? I just tested it and got ${Math.round(data.speeds.download)} Mbits/s.`}, function(error, tweet, response) {
        //tweet will contain information about the tweet sent, if it sends
        if (error) {
          console.log(error) //log error if there is one
        }
      });
    }
  });
}, 86400000)
