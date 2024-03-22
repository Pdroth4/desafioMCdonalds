import React from 'react'
import * as S from './Footer_style'


import logo from '../../assets/logo.svg'
import pla from '../../assets/pla.svg'
import apps from '../../assets/apps.svg'

export default function Footer() {
  return (
    <S.Footer>
      <div className="logoAndText">

        <img src={logo} alt="logo" />
        <p>© McDonald’s 2024</p>
      </div>

      <div className="app">
        <img className='play' src={pla} alt="paystore" />
        <img  className='ios'src={apps} alt="AppStore" />
      </div>
    </S.Footer>
  )
}
