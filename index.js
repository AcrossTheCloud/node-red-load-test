var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost');

var RateLimiter = require('limiter').RateLimiter;
var limiter = new RateLimiter(1, 1);

var generate_message = function(id) {
  var message = {};
  message.location = {};
  message.location.lat = Math.random()*360-180;
  message.location.lon = Math.random()*360-180;
  message.time = new Date().valueOf();
  message.id = id;
  message.level = Math.floor(Math.random()*200);
  return message;
}



client.on('connect', function () {
  var number = 10000;
  console.log(Date.now());
  for (var i = 0; i < number; i++) {
      client.publish('topic',JSON.stringify(generate_message(i)));
  }
  console.log(Date.now());

});
