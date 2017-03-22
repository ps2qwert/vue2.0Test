var http = require('http');
var https = require("https")
var querystring = require('querystring');
var url = require('url');




function httpReq(req,res,obj){
        res.writeHead(200, {'Content-Type': 'application/json',"Access-Control-Allow-Origin":"*"});
        var data = querystring.stringify(obj.data);
        var options = {
            host: obj.url,
            path: obj.path + data,
            method: obj.method,
            headers: obj.headers
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
        req.end();    
}

function httpGet(req,res,obj){
    res.writeHead(200, {'Content-Type': 'application/json',"Access-Control-Allow-Origin":"*"});
    console.log(obj.data)
    var data = querystring.stringify(obj.data)
    console.log(data)
    var options = {
        hostname : obj.url,
        path : obj.path + data,
        method : obj.method
    }
    https.get(options, (resource) => {
      var body=''
      resource.on('data', (d) => {
        body += d
      });
      resource.on('end',function(d){
        res.end(body)
      })
    }).on('error', (e) => {
      console.error(e);
    });    
}


var server = http.createServer(function (req, res) {
    var url_info = url.parse(req.url, true);
    console.log(url_info)
    var info = ''
    // if(url_info.pathname === '/test'){
    //     httpReq(req,res,{
    //         url : 'v.juhe.cn',
    //         path : '/weixin/query?',
    //         method : 'GET',
    //         headers:{
    //             'Content-Type': 'application/json;charset=UTF-8'
    //         },
    //         data : {
    //             key : "45c5a8c1087989149f8fd3704cb522bf"
    //         }
    //     })
    // }else if(url_info.pathname === '/movie'){
    //     res.writeHead(200, {'Content-Type': 'application/json',"Access-Control-Allow-Origin":"*"});
    //     var reqData = url.parse(req.url).query
    //     https.get('https://api.douban.com/v2/movie/top250?count='+reqData.count, (resource) => {
    //       var body=''
    //       resource.on('data', (d) => {
    //         process.stdout.write(d);
    //         body += d
    //       });
    //       resource.on('end',function(d){
    //         res.end(body)
    //       })
    //     }).on('error', (e) => {
    //       console.error(e);
    //     });    
    // }else if(url_info.pathname === ''){

    // }
    switch (url_info.pathname){
        case '/test':
            httpReq(req,res,{
                url : 'v.juhe.cn',
                path : '/weixin/query?',
                method : 'GET',
                headers:{
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data : {
                    key : "45c5a8c1087989149f8fd3704cb522bf"
                }
            })            
            break;
        case '/movie':
            var reqData = url.parse(req.url,true).query
            console.log(reqData.count)
            httpGet(req,res,{
                url : 'api.douban.com',
                path : '/v2/movie/top250?',
                method: 'GET',
                data : {
                    count : reqData.count
                }
            })
            break;
        case '/movieDetails':
            var reqData = url.parse(req.url,true).query
            console.log(reqData.id)
            httpGet(req,res,{
                url : 'api.douban.com',
                path : '/v2/movie/subject/'+reqData.id,
                method: 'GET',
                data : {}
            })
            break;
        default :
            console.log("请求错误")
    }

});






server.listen(9000, '127.0.0.1');
console.log('listening on port  9000');