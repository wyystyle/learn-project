var http=require('http');
var fs =require('fs');
var server=http.createServer(function(req,res){
	/*res.end('Hallow');*/
	res.setHeader('Content-Type','text/html','charset=UTF-8');
	var filePath="./"+req.url;
	fs.readFile(filePath,function(err,data){
		if(err){
			res.end('request file');
		}else{
			res.end(data);
		}

	})
})

server.listen(3000,'127.0.0.1',function(){
	console.log('server running at http://127.0.0.1:3000')
})