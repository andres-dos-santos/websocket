const socket = io('http://localhost:3000')

socket.on('connect', (response) => {
  // console.log(response)
})

socket.on('message', (response) => {
  console.log(response)

  socket.emit('message', 'Atirou no braço.')
})