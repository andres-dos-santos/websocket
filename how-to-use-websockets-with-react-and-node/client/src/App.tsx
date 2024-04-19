import { useState } from 'react'

import { Login } from './components/login'
import { Home } from './components/home'

export default function App() {
  const [username, setUsername] = useState('')

  return (
    <div className="mx-auto max-w-[800px] flex flex-col pt-20">
      {!username ? (
        <Login onSubmit={setUsername} />
      ) : (
        <Home username={username} />
      )}
    </div>
  )
}
