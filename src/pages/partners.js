import * as React from 'react'

import Prelogin from '../components/prelogin'
import { container1, container2, container3, container4, customhead, custompara, button } from '../components/prelogin/styles/partners.module.scss'

const CustomHead = ({ children }) => {
  return (
    <h1 className={customhead}>
      {children}
    </h1>
  )
}

const CustomPara = ({ children }) => {
  return (
    <p className={custompara}>
      {children}
    </p>
  )
}

const Partners = () => {
  return (
    <Prelogin>
      <div className={container1}>
        <CustomHead>PARTNER PROGRAMS</CustomHead>
        <div>
          <CustomPara>Be part of our history and help us achieve key milestones.</CustomPara>
          <button className={button}>Become a Partner !</button>
        </div>
      </div>
      <div className={container2}>
        <CustomHead>Why Partner with us ?</CustomHead>
        <CustomPara>We offer competitive agreements to help you create added value to your products and added revenue stream to your business.</CustomPara>
      </div>
      <div className={container3}>
        <div>
          <CustomHead>Reseller</CustomHead>
          <CustomPara>Our valued resellers are  enjoying strong returning revenue stream with healthy margins and our full support including marketing and training.</CustomPara>
        </div>
        <div>
          <CustomHead>White-labeling</CustomHead>
          <CustomPara> Our partners build software that leverage blockchain technology, enable new types of products, and innovate business models. We’ve designed a program to help them accelerate and amplify their impact. Become one of them.</CustomPara>
        </div>
      </div>
      <div className={container4}>
        <CustomHead>Become a Partner TODAY !</CustomHead>
        <CustomPara>
          By entering into a partnership with us, you get access to the information that will help you build reliable & scalable integrations, launch and scale new amazing products, help new customers use our awasome digital asset certification solution, get regular partner updates, access best practice advices and training access.
        </CustomPara>
        <br /><br />
        <CustomPara>
          Let’s join forces today for a better tomorrow. Contact us and lets talk how we can help eachother.
        </CustomPara>
      </div>
    </Prelogin >
  )
}
export default Partners