import React from 'react'
import PropTypes from 'prop-types'

const PasswordPresenter = ({id, passwordContent, wordClass}) => {
  const styledWord = passwordContent.join(' ')
  return (
    <div id={id}>
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
