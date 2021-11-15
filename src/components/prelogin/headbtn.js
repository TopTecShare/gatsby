import * as React from 'react'

import { login, freeTrial } from './styles/headbtn.module.scss'

const Headbtn = () => {
  return (
    <div>
      <button className={login}>
        Log In
      </button>

      <button className={freeTrial}>
        Free Trial!
      </button>
    </div>
  )
}
export default Headbtn