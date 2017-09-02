import React from 'react'
import PropTypes from 'prop-types'

const Header = ({className, textContent}) => <div className={className}>{textContent}</div>

Header.propTypes = {
  textContent: PropTypes.string,
  className: PropTypes.string
}

export default Header
