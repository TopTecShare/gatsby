import * as React from 'react'

import Logo from './logo'
import Headbar from './headbar'
import Headbtn from './headbtn'

import { container, sub } from './styles/header.module.scss'

const Header = () => {
  return (
    <div className={container}>
      <Logo />
      <div className={sub}>
        <Headbar />
        <Headbtn />
      </div>
    </div>
  )
}
export default Header