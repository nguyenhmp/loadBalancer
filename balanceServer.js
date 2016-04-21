var httpProxy = require('http-proxy');	
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
  var target = { target: addresses.shift() };
  console.log('balancing request to: ', target);
  proxy.web(req, res, target);
  addresses.push(target.target);
}).listen(8000, function(req, res){
console.log('listening on 8000');
}); 
