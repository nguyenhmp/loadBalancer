var httpProxy = require('http-proxy');	
var AWS = require('aws-sdk');
var childProcess = require('child_process').spawn;
var proxy = httpProxy.createServer();
var http = require('http')
var addresses = [
  {
    host: 'http://ec2-52-37-120-158.us-west-2.compute.amazonaws.com/',
    port: 3000
  },
  {
    host: 'http://ec2-52-37-3-211.us-west-2.compute.amazonaws.com/',
    port: 3000
  }
];	
http.createServer(function(req, res){
  var startTime = new Date();
  //pulls from front
  var target = { target: addresses.shift() };
  //sends request to target
  proxy.web(req, res, target);
  //pushes target back to the back
  addresses.push(target.target);
}).listen(8000, function(req, res){
console.log('listening on 8000');
}); 
