import React from 'react'
import PropTypes from 'prop-types'

function SliderFilter (props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div>
        <input
          id={props.id}
          type="range"
          min={props.min}
          max={props.max}
          step='1'
          onChange={props.newSelectionHandler}
          value={props.value}>
        </input>
        <h2>{props.value}</h2>
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
