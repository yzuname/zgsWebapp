var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 8081;
var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
        originWhiteList: [],
        requireHeader: ['Origin', '*'],
        removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function () {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
})