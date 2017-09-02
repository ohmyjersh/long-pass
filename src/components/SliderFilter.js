import React from 'react'
import PropTypes from 'prop-types'

const SliderFilter = ({title, id, min, max, newSelectionHandler, value}) => (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step="1"
          onChange={newSelectionHandler}
          value={value}
        />
        <h3>{value}</h3>
      </div>
    </div>
  )

SliderFilter.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  newSelectionHandler: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default SliderFilter
