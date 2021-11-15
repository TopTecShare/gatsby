import * as React from 'react'

import Header from './header'
import Footer from './footer'
import { container } from './styles/prelogin.module.scss'

const Prelogin = ({ children }) => {
  return (
    <div className={container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Prelogin