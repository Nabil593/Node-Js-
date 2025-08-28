// Node js Handilling HTTP Request & Response =>


// Handilling GET Request:
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/') {
//         res.writeHead(200, {'content-type': 'text/plain'})
//         res.end('Welcome to the Home page JeroxPrime')
//     } else {
//         res.writeHead(404, {'content-type': 'text/plain'})
//         res.end('Page Not Found');
//     }
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//     console.log(`Server is runing on http://localhost:${PORT}`);
// });




// Handilling POST Request:
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.method === 'POST' && req.url === '/submit') {

//         let body = '';

//         req.on('data', (chunk) => {
//             body += chunk.toString()
//         })

//         req.on('end', () => {
//             res.writeHead(200, {'content-type':'application/json'})
//             res.end(JSON.stringify({message:'Data recieved', data:body}))
//         })
        
//     } else {
//         res.writeHead(404, {'content-type':'text/plain'})
//         res.end('Route not Found')

//     }
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//     console.log(`Server is runing on http://localhost:${PORT}`);
// });





// Handilling Query Parameters:
// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url.startsWith('/search')) {

//         const queryObject = url.parse(req.url, true).query

//         res.writeHead(200, {'content-type':'application/json' })
//         res.end(JSON.stringify({message:'Query recieved', queryObject}))       
        
//     } else {

//         res.writeHead(404, {'content-type':'text/plain'})
//         res.end('Route Not Found')
//     }
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//     console.log(`Server is runing on http://localhost:${PORT}`);
// });




// Setting response Headers:
// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url.startsWith('/search')) {

//         const queryObject = url.parse(req.url, true).query

//         res.writeHead(200, {
//             'content-type':'application/json',
//             'custom-header':'Node Js server',
//             'custom-traking':'1234'
//          })
//         res.end(JSON.stringify({message:'Query recieved', queryObject}))       
        
//     } else {

//         res.writeHead(404, {'content-type':'text/plain'})
//         res.end('Route Not Found')
//     }
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//     console.log(`Server is runing on http://localhost:${PORT}`);
// });







// NodeJs Routes =>
// const http = require('http');
// const url = require('url');

// // Route Handler
// const routes = {
//     '/': (req, res) => {
//         res.writeHead(200, {'content-type':'text/plain'})
//         res.end('Hello JeroxPrime!!')
//     },
//     '/about': (req, res) => {
//         res.writeHead(200, {'content-type':'text/plain'})
//         res.end('How is it going? JeroxPrime!')
//     },
//     '/notfound': (req, res) => {
//         res.writeHead(404, {'content-type':'text/plain'})
//         res.end('I am Sorry JeroxPrime!!')
//     },
// }


// const server = http.createServer((req, res) => {

//     const {pathname} = url.parse(req.url)

//     if (routes[pathname]) {
//         routes[pathname](req, res)
//     } else {
//         routes['/notfound'](req, res)
//     }

// });

// const PORT = 3000;

// server.listen(PORT, () => {
//     console.log(`Server is runing on http://localhost:${PORT}`);
// });




//Handilling Dynamic Routes:
// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {

//     const {pathname} = url.parse(req.url)

//     if (pathname.startsWith('/user')) {
//         const userId = pathname.split('/')[2]
//         res.writeHead(200, {'content-type':'text/plain'})
//         res.end(`User Id : ${userId}`)
//     } else {
//         res.writeHead(404, {'content-type':'text/plain'})
//         res.end('Route Not Found')
//     }


// })


// const PORT = 3000;

// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// })






// Middleeware Function for Login request=>

// const http = require('http');
// const url = require('url');

// Middleware function
// function logRequest(req, res, next) {
//     console.log(`${req.method} request made to ${req.url}`);
//     next(req, res);
// }

// const server = http.createServer((req, res) => {
//     // Middleware call
//     logRequest(req, res, (req, res) => {
//         const { pathname } = url.parse(req.url);

//         if (pathname.startsWith('/user')) {
//             const userId = pathname.split('/')[2];
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end(`User Id : ${userId}`);
//         } else {
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end('Route Not Found');
//         }
//     });
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });





// Handilling URL-encoded data 9From Submission)=>
const http = require('http');
const url = require('url');
const queryString = require(
querystring');


const server = http.createServer((req, res) => {

    if (req.method === 'POST' && req.url === '/submit') {
        let data = '';

        req.on('data', (chunk) => {
            data += chunk
        })

        req.on('end', () =>{
            
            const parseData = queryString.parse(data)
            res.writeHead(200, {'content-type':'application/jason'})
            res.end(JSON.stringify({massege:"From data received", parseData}))

        })
    }

});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});