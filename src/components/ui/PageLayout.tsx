import React from 'react'
import Navbar from './Navbar'
import Background from './Background'
import PageLayoutStyled from '../../styles/PageLayout.styled'

export default function PageLayout({children} : any) {
  return (
    <PageLayoutStyled className='page'>
      <Navbar />
      {children}
      <Background />
    </PageLayoutStyled>
  )
}

