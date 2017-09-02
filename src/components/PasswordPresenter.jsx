import React from 'react'
import PropTypes from 'prop-types'

const PasswordPresenter = ({id, passwordContent}) => {
  const styledWord = passwordContent.join(' ')
  return (
    <div id={props.id}>
      <span className={wordClass}>{styledWord}</span>
    </div>
  )
}

PasswordPresenter.propTypes = {
  passwordContent: PropTypes.array,
  id: PropTypes.string,
  wordClass: PropTypes.string
}

export default PasswordPresenter
