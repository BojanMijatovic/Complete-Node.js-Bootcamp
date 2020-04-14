const fs = require('fs');
const http = require('http');
const url = require('url');

const start = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(start);
const writeText = `This is what we know about avocado`;
fs.writeFileSync('./txt/output.txt', writeText);
// console.log(`${writeText}`);

//  Non-blocking code
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {    //asynchronous way
//   fs.readFile(`./txt/${data1}.txt', 'utf-8`, (err, data2) => {
//     console.log(`And this second`);

//     fs.writeFile('./txt/final.txt', `${data1} and ${data2}`, (err, data3) => {
//       console.log(`Write this last`);
//     })
//   });
// });
// console.log('This will be first read file');

// ---------- Create  Server

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;                                        // requesting url 
  if (pathName === '/' || pathName === '/overview') {
    res.end(`This is overview`)
  } else if (pathName === '/product') {
    res.end(`This is from  product`)
  }
  else if (pathName === '/api') {
    res.writeHead(200, {                // server status and json type 
      'Content-type': 'application/json'
    });
    res.end(data)
  }
  else {
    res.writeHead(404, {
      'Content-type': 'text/html'
    });
    res.end(`<h1>Page not found</h1>`)
  }
});

server.listen(8000, () => {
  console.log(`Listening from port `)
});