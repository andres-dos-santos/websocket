import { createServer } from 'node:http'
import { Server } from 'socket.io'

const http = createServer()
const socket = new Server(http, {
  cors: { origin: '*' },
})

socket.on('connection', (socket) => {
  socket.on('message', (data) => {
    console.log(data)
  })

  socket.emit('message', 'Tirar 10% de vida!')
})

http.listen(3000, () => console.log('running!'))
