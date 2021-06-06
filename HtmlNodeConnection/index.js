const http = require('http');
const fs = require('fs');
const port = 8000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', (error, data) => {
        if (error)
        {
            res.writeHead(404);
            res.write("something went wrong");
        }
        else {
            res.write(data);
        }

        res.end();
    })
    
})

server.listen(port, (error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log("server is running on port" + port);
    }
});