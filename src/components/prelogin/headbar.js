import * as React from 'react'

import { container } from './styles/headbar.module.scss'
import Headlink from './headlink'

const Headbar = () => {
  return (
    <div className={container}>
      <ul>
        <li>
          <Headlink to="/products">
            Products
          </Headlink>
        </li>
        <li>
          <Headlink to="/pricing">
            Pricing
          </Headlink>
        </li>
        <li>
          <Headlink to="/partners">
            Partners
          </Headlink>
        </li>
        <li>
          <Headlink to="/stampcheck">
            StempCheck
          </Headlink>
        </li>
        <li>
          <Headlink to="/blog">
            Blog
          </Headlink>
        </li>
      </ul>
    </div>
  )
}
export default Headbar