import React from 'react'
import Button from 'material-ui/Button'
import Lock from 'material-ui-icons/Lock'

import PropTypes from 'prop-types'

const SubmitButton  = ({id, clickHandler}) => (
    <div>
      <Button fab color="primary" id={id} onClick={clickHandler}>
        <Lock style={{ width: 40, height: 40 }} />
      </Button>
    </div>
  )

SubmitButton.propTypes = {
  clickHandler: PropTypes.func,
  id: PropTypes.string
}

export default SubmitButton
