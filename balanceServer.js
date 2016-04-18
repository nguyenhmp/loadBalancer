var httpProxy = require('http-proxy');	
var proxy = httpProxy.createServer();
var http = require('http')
var addresses = [
	//YOUR CODE HERE
];	

http.createServer(function(req, res){
  var startTime = new Date();
  //remove the front IP address to proxy the request
  //<---YOUR CODE--->
  //this command proxies the request
  proxy.web(req, res, target);
  // ...and then the server you just used becomes the last item in the list.
  //<---YOUR CODE--->
  // ..the server you just used becomes the last item in the list:
  //<---YOUR CODE--->
}).listen(8000, function(req, res){
	console.log('listening on 8000');
}); 
