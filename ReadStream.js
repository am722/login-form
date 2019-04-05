var fs=require('fs');
var http = require('http');

http.createServer(function (req,res)
{
    res.writeHead(200,{'content-Type':'text/html'});
    var readStream =fs.createReadStream('User-Form.html','utf8');
readStream.pipe(res);
}).listen(3000);

console.log("Server is running on 127.0.0.1:3000/")






