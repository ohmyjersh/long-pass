import React from 'react'
import PropTypes from 'prop-types'

function PasswordPresenter (props) {
  return (
    <div id={props.id}>
      {props.passwordContent.split(' ').map((word, idx) => {
        return <h1 key={idx}>{word}</h1>
      })}
    </div>
  )
}

PasswordPresenter.propTypes = {
  passwordContent: PropTypes.string,
  id: PropTypes.string
}

export default PasswordPresenter
