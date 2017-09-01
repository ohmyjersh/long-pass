import React from 'react'
import Button from 'material-ui/Button'
import Lock from 'material-ui-icons/Lock'

import PropTypes from 'prop-types'

function SubmitButton (props) {
  return (
    <div>
      <Button fab color="primary" id={props.id} onClick={props.clickHandler}>
        <Lock style={{ width: 40, height: 40 }} />
      </Button>
    </div>
  )
}

SubmitButton.propTypes = {
  clickHandler: PropTypes.func,
  id: PropTypes.string
}

export default SubmitButton
