import React from 'react'
import PropTypes from 'prop-types'

function Header (props) {
  return (
    <div>
      <h1>{props.textContent}</h1>
    </div>
  )
}

Header.propTypes = {
  textContent: PropTypes.string
}

export default Header
