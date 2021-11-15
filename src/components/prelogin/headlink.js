import * as React from 'react'
import { Link } from 'gatsby'

const Headlink = ({ to, children }) => {
  return (
    <Link to={to} activeStyle={{ fontWeight: "bold" }} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  )
}

export default Headlink