const http = require('http')

const server = http.createServer((req,res)=>{
  if (req.url === '/'){
    res.end('Welcome tp these home page this is my response to request')
  }
  if(req.url==='/about'){
    res.end('here is from short history')
  }
  res.end(`
  <h1>oops!</h1>
<p>we can't find the page you are looking for here</p>
<a href="/">bach home</a>
  `) 
  
})

server.listen(5000) //port server is listening to is these