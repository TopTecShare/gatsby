import * as React from 'react'

import Copyright from './copyright'
import Policy from './policy'
import { container } from './styles/footer.module.scss'

const Footer = () => {
  return (
    <div className={container}>
      <Copyright />
      <Policy />
    </div>
  )
}

export default Footer