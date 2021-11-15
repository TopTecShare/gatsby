import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Prelogin from '../components/prelogin'
import { container, container2, custom, gallery } from '../components/prelogin/styles/freetrial.module.scss'

const Custom = ({ header, children }) => {
  return (
    <div className={custom}>
      <h2>{header}</h2>
      <p>{children}</p>
    </div>
  )
}

const Gallery = ({ title, children }) => {
  return (
    <div className={gallery}>
      <div>{children}</div>
      <h2>{title}</h2>
    </div>
  )
}
const FreeTrial = () => {
  return (
    <Prelogin>
      <div className={container}>
        <h1>BUILT TO BE BETTER THAN COMPETITORS</h1>
        <div>
          <Custom header="Faster">Timestamping is done in real time, there is no wait time.</Custom>
          <Custom header="Smarter">The only multi blockchain and multi online storage timestamping.</Custom>
          <Custom header="Affordable">Cost optimization through leveraging inexpensive blockchain.</Custom>
        </div>
      </div>
      <div className={container2}>
        <h1>BUILT TO BE USEFUL</h1>
        <p>Blockchain-based hashing and time stamping make for exceedingly strong evidence of the authenticity of a document. Obtain verifiable receipts with all links to blockchains, web archives and social media publication.
        </p>
        <div>
          <Gallery title="Proof of Existance">
            <StaticImage
              alt="image 1"
              src="../images/img1.png"
              style={{
                width: '4.0625em',
                height: '2.625em',
              }}
            />
          </Gallery>
          <Gallery title="Integrity Evidence">
            <StaticImage
              alt="image 2"
              src="../images/img2.png"
              style={{
                width: '4.0625em',
                height: '2.625em',
              }}
            />
          </Gallery>
          <Gallery title="Ownership Attestation">
            <StaticImage
              alt="image 3"
              src="../images/img3.png"
              style={{
                width: '4.0625em',
                height: '2.625em',
              }}
            />
          </Gallery>
          <Gallery title="Tamper Verification">
            <StaticImage
              alt="image 4"
              src="../images/img4.png"
              style={{
                width: '4.0625em',
                height: '2.625em',
              }}
            />
          </Gallery>
          <Gallery title="Forensic Certification">
            <StaticImage
              alt="image 5"
              src="../images/img5.png"
              style={{
                width: '4.0625em',
                height: '2.625em',
              }}
            />
          </Gallery>
          <Gallery title="Independent Validation">
            <StaticImage
              alt="image 6"
              src="../images/img6.png"
              style={{
                width: '4.0625em',
                height: '2.625em',
              }}
            />
          </Gallery>
        </div>
      </div>
    </Prelogin>
  )
}
export default FreeTrial