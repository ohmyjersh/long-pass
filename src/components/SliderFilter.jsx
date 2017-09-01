import React from 'react'
import PropTypes from 'prop-types'

function SliderFilter (props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          id={props.id}
          type="range"
          min={props.min}
          max={props.max}
          step="1"
          onChange={props.newSelectionHandler}
          value={props.value}
        />
        <h3>{props.value}</h3>
      </div>
    </div>
  )
}

SliderFilter.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  newSelectionHandler: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default SliderFilter
