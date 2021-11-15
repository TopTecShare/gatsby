import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Headlink from './headlink'
import { container } from './styles/logo.module.scss'

const Logo = () => {
  return (
    <Headlink to="/">
      <div className={container}>
        <StaticImage
          alt="Logo"
          src="../../images/logo.png"
          style={{
            width: '4.0625em',
            height: '3.125em',
          }}
        />
        <p>
          EviSTAMP
        </p>
      </div>
    </Headlink>
  )
}
export default Logo