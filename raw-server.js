const http = require('http');

const server = http.createServer((req, res) => {
    //req: Incoming request (method, url, headers)
    //res: Outgoing response (write, end)

    if (req.method === 'GET' && req.url === '/') {
        //Manual route check
        res.writeHead(200, { 'Content-Type': 'text/plain'}) // Manual headers
        res.end('Hello from Raw Node.js!') // Send body and close
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain'})
        res.end('Not Found :('); // Basic Error
    }
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Raw server running on http://localhost:${PORT}`);
});