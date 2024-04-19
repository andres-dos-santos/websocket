import { useEffect, useRef } from 'react'
import useWebSocket from 'react-use-websocket'
import throttle from 'lodash.throttle'

const WS_URL = 'ws://127.0.0.1:8000'
const THROTTLE = 50 // 50 milliseconds

export function Home(props: { username: string }) {
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(WS_URL, {
    queryParams: { username: props.username },
  })

  console.log(lastJsonMessage)

  const sendJsonMessageThrottled = useRef(throttle(sendJsonMessage, THROTTLE))

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      sendJsonMessageThrottled.current({
        x: event.clientX,
        y: event.clientY,
      })
    })
  }, [])

  return (
    <>
      <h1 className="font-bold text-xl">Hello, {props.username}</h1>

      <pre>{JSON.stringify(lastJsonMessage, null, 2)}</pre>
    </>
  )
}
