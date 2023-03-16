import React, { useEffect, useRef, useState, MutableRefObject } from 'react'
import styled from 'styled-components'

const SpriteImage = styled.img`
  height: var(--sprite-height);
  margin-top: 1rem;
`

export default function Sprite(props:any) {
  const { data } = props
  const [index, setIndex] = useState(0)
  const sprite = data?.images[index]

  let spriteRef : any = useRef(null)
  
  useEffect(() => {
    if (data) {
      spriteRef = setTimeout(() => {
        if (index >= data.images.length - 1) {
          setIndex(0)
        } else {
          setIndex(prev => prev + 1)
        }
      }, 900)
    } else {
      clearInterval(spriteRef)
    }
  }, [data, index])  

  return (
    <div>
      {!sprite && <SpriteImage src="/NECK_STRETCH/leftandright/1.png" height={200}></SpriteImage>}
      {sprite && <SpriteImage src={sprite}></SpriteImage>}
    </div>
  )
}
