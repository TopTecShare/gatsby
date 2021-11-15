import * as React from 'react'

import Prelogin from '../components/prelogin'
import { container, container2 } from '../components/prelogin/styles/index.module.scss'

const IndexPage = () => {
  return (
    <Prelogin>
      <div className={container}>
        <h1>WELCOME TO EVISTAMP</h1>
        <h2>Digital Assets Certification Solution</h2>
        <button>Get Started!</button>
      </div>
      <div className={container2}>
        <h2>Blockchain timestamping and more</h2>
        <p>Prove the origin, existence, authenticity and integrity of your digital assets by timestamping them using Arweave and
          <br />
          Cosmos blockchains, OTS (OpenTimestamps), social media and web archive.</p>
        <div>
          <button>See our Products</button>
          <button>Contact sales</button>
        </div>
      </div>
    </Prelogin>
  )
}
export default IndexPage