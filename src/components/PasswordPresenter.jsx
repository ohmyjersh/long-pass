import React from 'react'
import PropTypes from 'prop-types'

function PasswordPresenter (props) {
  const styledWord = props.passwordContent.join(' ')
  return (
    <div id={props.id}>
      <span className={props.wordClass}>{styledWord}</span>
    </div>
  )
}

PasswordPresenter.propTypes = {
  passwordContent: PropTypes.array,
  id: PropTypes.string,
  wordClass: PropTypes.string
}

export default PasswordPresenter
