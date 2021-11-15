import * as React from 'react'
import { Link } from 'gatsby'

import { container, link } from './styles/policy.module.scss'

const Sub = ({ children }) => {
  return (
    <Link className={link}>
      {children}
    </Link>
  )
}
const Policy = () => {
  return (
    <div className={container}>
      <Sub>
        Privacy
      </Sub>
      <Sub>
        |
      </Sub>
      <Sub>
        Cookies
      </Sub>
      <Sub>
        |
      </Sub>
      <Sub>
        Terms and conditions of use
      </Sub>
    </div>
  )
}

export default Policy