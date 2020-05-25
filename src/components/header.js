import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from "../components/Navigation/navigation"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      color:`white`
    }}
  >
    <Navigation /> 
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
