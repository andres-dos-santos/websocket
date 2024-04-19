/* eslint-disable n/no-deprecated-api */
import http from 'http'
import { WebSocketServer, type RawData } from 'ws'
import url from 'url'
import { v4 } from 'uuid'

import type { Connection, Users, Request } from './types'

const server = http.createServer()
const wsServer = new WebSocketServer({ server })

const connections: Connection = {}
const users: Users = {}

function handleMessage(bytes: RawData, uuid: string) {
  const message = JSON.parse(bytes.toString())

  const user = users[uuid]

  user.state = message

  console.log(message)
}

// function handleClose(uuid: string) {}

wsServer.on('connection', (connection, request: { url: string }) => {
  const { username } = url.parse(request.url, true).query as Request

  const uuid = v4()

  connections[uuid] = connection

  users[uuid] = {
    username,
    state: {},
  }

  connection.on('message', (message) => handleMessage(message, uuid))
  // connection.on('close', () => handleClose(uuid))
})

server.listen(8000, () => {
  console.log('running on 8000!')
})
