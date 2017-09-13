var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
   
   response.writeHead(200, {'Content-Type': 'text/plain'});

    if(url.parse(request.url).pathname == '/listings' ){
      response.write(JSON.stringify(listingData));
    }
    else {
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.write('Bad gateway error');
    }
    
    response.end();
    
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */

  if (err) throw error
  listingData = JSON.parse(data);

  http.createServer(requestHandler).listen(port);

  console.log('Server started');
   

});





