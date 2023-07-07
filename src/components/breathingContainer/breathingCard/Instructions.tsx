import React, { useEffect, useState } from 'react'
import { duration } from '../../../data/BREATHING'

type Mode = {
  in: number;
  hold: number;
  out: number;
  rest: number;
}

export default function Instructions(props : any) {
  const {status} = props
  const [fadeout, setFadeout] = useState(false)

  useEffect(() => {
    if (status.mode === "out") return
    setFadeout(false)
    const modeDuration = duration[status.mode as keyof Mode]
    const timeout = setTimeout(() => {
      setFadeout(true)
    }, (modeDuration - 500))
    return () => clearTimeout(timeout)
  }, [status])

  return (
    <p className={`${status.mode !== "rest" && "fade-in"} ${fadeout && "fade-out"}`}>{status.text}</p>
  )
}
