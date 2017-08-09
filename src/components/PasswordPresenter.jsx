import React from 'react'
import PropTypes from 'prop-types'

function PasswordPresenter (props) {
  return (
    <div>
      <div id="password-content">{props.passwordContent}</div>
    </div>
  )
}

PasswordPresenter.propTypes = {
  passwordContent: PropTypes.string
}

export default PasswordPresenter
