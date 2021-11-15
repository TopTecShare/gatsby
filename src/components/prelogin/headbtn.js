import * as React from 'react'
import { Link } from 'gatsby'

import { login, freeTrial } from './styles/headbtn.module.scss'

const Headbtn = () => {
  return (
    <div>
      <button className={login}>
        Log In
      </button>
      <Link to="/freetrial">
        <button className={freeTrial}>
          Free Trial!
        </button>
      </Link>
    </div>
  )
}
export default Headbtn