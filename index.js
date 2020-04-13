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


// ---------- Server
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '' || pathName === '/overview') {
    res.end(`This is overview`)
  } else if (pathName === '/product') {
    res.end(`This is from  product`)
  }
  res.end(`Hello from server`)
});

server.listen(8000, '127.0.0.1', () => {
  console.log(`Listening from port `)
}
);