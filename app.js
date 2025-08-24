const fs = require('fs');
const http = require('http');
const path = require('path');
const os = require('os');
const url = require('url');
const crypto = require('crypto');
const sayHello = require('./greetings');
const math = require('./math');
const lodash = require('lodash');


// fs Module:
//  fs.readFile('example.txt', 'utf8', (err, data) => { if (err) {
//      console.log(err);
//       return;
//     }
//     console.log(data);
// });

// const content = 'Hello, NodeJs';
// fs.writeFile('output.txt', content, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('File writen Successfully');
// });



// HTTP Module:
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/plain');
//     res.end('Hello World')
// });

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000');
// });



// Path Module:
// const directory = '/user/local';
// const fileName = 'example.txt';

// const fullPath = path.join(directory, fileName);
// console.log(fullPath);



// OS Module:
// console.log('platform:', os.platform());
// console.log('CPU Architechture:', os.arch());
// console.log('Total Memory:', os.totalmem());
// console.log('Free Memory:', os.freemem());



// URL Module:
// const myUrl = new URL('https://example.com:8080/path/name?query=Nabil#hash');
// console.log('Host', myUrl.host);
// console.log('Pathname:', myUrl.pathname);
// console.log('Search Params:', myUrl.searchParams.get('query'));



// Crypto Module:
// const hash = crypto.createHash('sha256');
// hash.update('Helllo world');
// console.log(hash.digest('hex'));



// Custom Module:
// const massage = sayHello('Developers');
// console.log(massage);
// Multiple Custom Module:
// console.log(math.add(9, 5));
// console.log(math.substrac(5, 5));



// Third-Party Modules:
// const number = [1, 2, 3, 4, 5];
// const reversed = lodash.reverse(number);
// console.log(reversed);




// Node.Js Streams:

// Readble Stream:
// const readbleStream = fs.createReadStream('example.txt', {encoding: 'utf8'});

// readbleStream.on('data', (chunk) => {
//     console.log(chunk);
// })

// readbleStream.on('end', () => {
//     console.log('Finished reading the file.');
// })

// readbleStream.on('error', (err) => {
//     console.error('Error', err);
// })


// Writable Stream:
// const writableStream = fs.createWriteStream('output02.txt');

// writableStream.write("Hello ");
// writableStream.write("Nabil");
// writableStream.end();

// writableStream.on('finish', () => {
//     console.log('Finished writting to the file');
// });



// Piping Stream Method:
const readbleStream = fs.createReadStream('example.txt');
const writableStream = fs.createWriteStream('example-output.txt');

readbleStream.pipe(writableStream);
writableStream.on('finish', () => {
    console.log('File copied successfully');
})