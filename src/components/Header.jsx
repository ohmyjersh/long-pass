import React from 'react'
import PropTypes from 'prop-types'

function Header (props) {
  return (
    <div>
      <div className={props.className}>{props.textContent}</div>
    </div>
  )
}

Header.propTypes = {
  textContent: PropTypes.string,
  className: PropTypes.string
}

export default Header
