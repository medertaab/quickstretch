import React from 'react'
import Navbar from '../Navbar'
import styled from 'styled-components'
import Background from './Background'

export default function PageLayout({children} : any) {
  return (
    <PageLayoutStyled className='page'>
      <Navbar />
      {children}
      <Background />
    </PageLayoutStyled>
  )
}

const PageLayoutStyled = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 2rem;
  max-width: var(--max-screen);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`