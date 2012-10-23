// curl -k https://localhost:8000/
var https = require('https'),
    fs = require('fs'),
    options = {
      key: fs.readFileSync('./certs/privatekey.pem'),
      cert: fs.readFileSync('./certs/certificate.pem')
    };

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);