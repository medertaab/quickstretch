import React from 'react'
import { TimerStyled } from './Timer.styled'

export default function Timer({isPaused, status, autoplay, children} : any) {
  return (
    <TimerStyled isPaused={isPaused} status={status} autoplay={autoplay}>
      {children}
    </TimerStyled>
  )
}
