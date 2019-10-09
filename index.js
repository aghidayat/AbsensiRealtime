const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

// route
app.get('/', () => console.log('server sedang berjalan'))

io.on('connection', (socket) => {

  socket.on('masuk', (data) => {
    io.emit('masuk', {name: data.name, date: data.date})
  })
  
})

http.listen(3000, () => {
  console.log('berjalan di port 3000')
})