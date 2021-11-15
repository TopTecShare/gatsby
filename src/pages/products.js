import * as React from 'react'
import Prelogin from '../components/prelogin'
import { header, container } from '../components/prelogin/styles/products.module.scss'

const Products = () => {
  return (
    <Prelogin>
      <h1 className={header}>PRODUCTS</h1>
      <div className={container}>
        <div>
          <h2>EviStamp</h2>
          <p>Web-based timestamping solution to give you strong legal evidence that the contents of your work existed at a point-in-time and have not changed since that time.</p>
        </div>
        <div>
          <h2>EviStamp API</h2>
          <p>API-based solution to help you automate the timestamping of internal digital assets or to integrate it in your software products.</p>
        </div>
        <div>
          <h2>EviStamp Verify</h2>
          <p>Verify the hash and certificates for your EviStamped digital assets.</p>
        </div>
        <p>Get in contact with us to discuss EviStamp and how we can become partners to create awesome and powerful software!</p>
      </div>
      <div></div>
    </Prelogin>
  )
}
export default Products