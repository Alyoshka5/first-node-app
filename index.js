const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const fileName = getFileName(req.url);
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    fs.readFile(fileName, (err, html) => {
        if (err) return;
        res.end(html);
    });

}).listen(8080);


function getFileName(pathname) {
    switch (pathname) {
        case '/':
            return 'index.html';
        case '/about':
            return 'about.html';
        case '/contact-me':
            return 'contact-me.html';
        default:
            return '404.html';
    }
}