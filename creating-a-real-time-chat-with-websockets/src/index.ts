import express, { type Application } from 'express'
import http from 'http'
import { dirname } from 'path'
import { Server } from 'socket.io'

class App {
  private app: Application
  private http: http.Server
  private io: Server

  constructor() {
    this.app = express()
    this.http = http.createServer(this.app)
    this.io = new Server(this.http)

    this.listenSocket()

    this.setupRoutes()
  }
  
  listenServer() {
    this.http.listen(3000, () => console.log('Server is running!'))
  }

  listenSocket() {
    this.io.on('connection', (socket) => {
      socket.on('listen', (message) => {
        console.log(message)

        this.io.emit('listen', () => message)
      })
    })
  }

  setupRoutes() {
    this.app.get('/', (request, reply) => {
      reply.sendFile('/index.html', { root: './src' });
    })
  }
}

const app = new App()

app.listenServer()