import { useState } from 'react'

export function Login(props: { onSubmit: (username: string) => void }) {
  const [username, setUsername] = useState('')

  return (
    <>
      <h1 className="font-bold text-xl">Welcome</h1>
      <span className="text-sm text-zinc-500">What should be called you?</span>

      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault()

          props.onSubmit(username)
        }}
        className="mt-10"
      >
        <input
          type="text"
          value={username}
          placeholder="Username"
          className="border h-10 w-96 text-sm px-3"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="bg-zinc-800 h-10 px-5 ml-5">
          <span className="text-white text-xs font-semibold">Enviar</span>
        </button>
      </form>
    </>
  )
}
