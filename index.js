const http = require('http');
const fs = require('fs');

const server = http.createServer((req,resp) => {

  const url = req.url;

  let path = './views/';

  resp.setHeader('Content-Type','text/html')

  switch (url) {
    case '/':
      path = path+'index.html'
      resp.statusCode = 200;
      break;
    case '/iletisim':
      path = path+'iletisim.html';
      resp.statusCode = 200;
      break;
    case '/hakkimizda':
      path = path+'hakkimizda.html';
      resp.statusCode = 200;
      break;
    default:
      path = path+'404.html';
      resp.statusCode = 404;
      break;
  }

  fs.readFile(path, 'utf-8', (err,data) => {
      resp.end(data);
  })
})


const PORT = 5000;

server.listen(5000, ()=>{
  console.log("Server Listened");
})