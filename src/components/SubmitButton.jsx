import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/action/flight-takeoff'
import PropTypes from 'prop-types'

function SubmitButton (props) {
  return (
    <div>
      <FloatingActionButton
        id="new-password-submit"
        onClick={props.clickHandler}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  )
}

SubmitButton.propTypes = {
  clickHandler: PropTypes.func
}

export default SubmitButton
