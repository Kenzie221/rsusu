import { useEffect } from "react"
import { useState } from "react"


export const Clock = () => {
  
  const [time, setTime] = useState(new Date())

  useEffect(()=>{

    const interval =setInterval(()=>{
      setTime(new Date())
    },1000)

    return ()=>clearInterval(interval);
  })

  const formatTime =()=>{
    const hours = time.getHours().toString().padStart(2,'0')
    const minutes = time.getMinutes().toString().padStart(2,'0')
    const seconds = time.getSeconds().toString().padStart(2,'0')

    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <>
      {formatTime()}
    </>
  )
}
