import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/action/flight-takeoff'

function SubmitButton (props) {
  return (
    <FloatingActionButton id="new-password-submit">
      <ContentAdd />
    </FloatingActionButton>
  )
}

export default SubmitButton
