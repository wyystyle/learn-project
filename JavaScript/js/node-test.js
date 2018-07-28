var http=require('http');
var fs=require('fs');//文件信息，在data中
var server=http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html;charset=UTF-8");
	// res.setHeader("Content-Type","text/plain")
	var filePath="./"+req.url;
	fs.readFile(filePath,function(err,data){
		if(err){
			res.statusCode=404;
			res.end('file not fond')//失败或者没有，返回err
		}else{
			res.statusCode=200;
			res.end(data);//成功返回请求的data文件
		}
	})
	// res.end();
});
server.listen(3000,'127.0.0.1',function(){

})