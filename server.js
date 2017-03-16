var http = require('http');
var querystring = require('querystring');



var server = http.createServer(function (req, res) {
    var url_info = require('url').parse(req.url, true);
    var info = ''
    if(url_info.pathname === '/test'){
        res.writeHead(200, {'Content-Type': 'application/json',"Access-Control-Allow-Origin":"*"});
        var data = querystring.stringify({
                key : "45c5a8c1087989149f8fd3704cb522bf"
        });
        var options = {
            host: 'v.juhe.cn',
            path:'/weixin/query?' + data,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };
        var req = http.request(options, function(resource) {
            // console.log(resource)
            resource.setEncoding('utf8');
            var body = ''
            resource.on('data', function (chunk) {
                console.log("2")
                body += chunk
            });
            resource.on('end',function (chunk){
                 res.end(body);
            })
        });
        console.log("1")
        console.log("3")
        req.end();
    }else if(url_info.pathname === '/movie'){
        res.writeHead(200, {'Content-Type': 'application/json',"Access-Control-Allow-Origin":"*"});
        var data = querystring.stringify({
                count : "10"
        });
        var options = {
            host: 'https://api.douban.com',
            path:'/v2/movie/top250?' + data,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };
        var req = http.request(options, function(resource) {
            resource.setEncoding('utf8');
            var body = ''
            resource.on('data', function (chunk) {
                console.log("2")
                body += chunk
            });
            resource.on('end',function (chunk){
                 res.end(body);
            })
        });
        req.end();        
    }else{

    }
});


//json转换为字符串
// var data = querystring.stringify({
//         key : "45c5a8c1087989149f8fd3704cb522bf"
// });



// var options = {
//     host: 'v.juhe.cn',
//     path:'/weixin/query?' + data,
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8'
//     }
// };

// var req = http.request(options, function(res) {
//     res.setEncoding('utf8');
//     res.on('data', function (chunk) {
//         console.log("body: " + chunk);
//     });
//     res.on('end',function (chunk){
//         console.log("body: " + chunk);
//     })
// });


// req.end();



server.listen(9000, '127.0.0.1');
console.log('listening on port  9000');