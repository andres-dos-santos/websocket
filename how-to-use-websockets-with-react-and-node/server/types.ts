export type Connection = {
  [key: string]: WebSocket
}

export type Users = {
  [key: string]: { username: string; state: object }
}

export type Request = {
  username: string
}
