/**
 * Node HTTPS Server
 * EXPORT NODE_ENV=development;
 * node server.js;
 * curl -k https://localhost:8000/
 */
var https = require('https'),
    fs = require('fs'),
    Config = require('./conf'),
    options = {
      key: fs.readFileSync('./certs/privatekey.pem'),
      cert: fs.readFileSync('./certs/certificate.pem')
    },
    conf = new Config();
       
https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("this site is running in the "+process.env.NODE_ENV+" environment and debug mode is configured as "+conf.debug+"\n");
}).listen(conf.port);
  
  
console.log('Server running at https://localhost:'+conf.port+'/ as '+process.env.NODE_ENV+' with config debug as '+conf.debug);