const express = require('express')
const app = express()
const port = 3000

const healthcheck = () => {
  app.get('/healthcheck', (req, res) => {
    console.log("healthcheck")
    res.status(503)
    res.send("")
  })
  
  console.log("starting server in 30s")
  setTimeout(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  }, 30000)
  
}


module.exports = { healthcheck }