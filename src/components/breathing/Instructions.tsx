import React, { useEffect, useState } from 'react'
import { duration } from '../../data/breathing'

export default function Instructions(props : any) {
  const {status} = props
  const [fadeout, setFadeout] = useState(false)

  useEffect(() => {
    if (status.mode === "out") return
    setFadeout(false)
    const timeout = setTimeout(() => {
      setFadeout(true)
    }, (duration[status.mode] - 500))
    return () => clearTimeout(timeout)
  }, [status])

  return (
    <p className={`${status.mode !== "rest" && "fade-in"} ${fadeout && "fade-out"}`}>{status.text}</p>
  )
}
