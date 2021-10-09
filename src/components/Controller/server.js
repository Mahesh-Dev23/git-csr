const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('../../JsonServer/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})


  const d = new Date()
  const filename = "try.pdf"

  const fs = require('fs');
  const path = require('path');
  const data = fs.readFileSync('../../JsonServer/db.json', 'utf8')
 
    console.log("its working")
    
    fs.writeFile(filename , data, function (err) {
      if (err) throw err;
      console.log('Saved to '+filename+'!');
    })
  
