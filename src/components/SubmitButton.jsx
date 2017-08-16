import React from 'react'
import Button from 'material-ui/Button'
import Build from 'material-ui-icons/build'

import PropTypes from 'prop-types'

function SubmitButton (props) {
  return (
    <div>
      <Button
        fab
        color="primary"
        id={props.id}
        onClick={props.clickHandler}>
        <Build />
      </Button>
    </div>
  )
}

SubmitButton.propTypes = {
  clickHandler: PropTypes.func,
  id: PropTypes.string
}

export default SubmitButton
