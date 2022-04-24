var http = require("http")
var url = require("url")
var fs = require("fs")

http.createServer(function(req,res){
    var q = url.parse(req.url)
    var filename = "." + q.pathname + ".html"
    if (q.pathname == "/"){
        filename = "./index.html"
    }
    if(q.pathname != "/index" && q.pathname != "/" && q.pathname != "/about" && q.pathname != "contact-me"){
        filename = "./404.html"
    }
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200,{"Content-type": "text/html"})
        res.write(data)
        return res.end()
    })

    
}).listen(8080);