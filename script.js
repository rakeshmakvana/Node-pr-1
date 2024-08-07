const http = require('http');
const fs = require('fs');
const port = 3010;

const log = 'Successfully Entered Rakesh File System';


fs.appendFile('demo.txt', `${log}\n`, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Appended to file:', log);
    }
});


fs.readFile('demo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:', data);
    }
});


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to the home page');
    } else if (req.url === '/About') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html'); 
        res.end('<h1>Welcome to the About page</h1>');
    } else if (req.url === '/Contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Welcome to the Contact page</h1>'); 
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page not found');
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
