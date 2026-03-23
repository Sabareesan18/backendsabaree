var http=require("http")
console.log("http module ok")
http.createServer((req,res)=>{
    res.end("<h1>this is simple nodejs output</h1>");

}).listen(8019)
console.log("server is running at 8019 port number......")