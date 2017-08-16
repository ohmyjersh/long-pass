import React from 'react'
import PropTypes from 'prop-types'

// const WORD_LENGTH_CHOICES = [...Array(10).keys()].map(x => x + 1)
// const OPTIONS = WORD_LENGTH_CHOICES.map((num, idx) => {
//   return <option value={num} key={idx}>{num}</option>
// })

function WordLengthField (props) {
  return (
    <div>
      <h3>Max Word Length</h3>
      <div>
        <input
          id="slider-max-word-length"
          type="range"
          min='1'
          max='10'
          step='1'
          onChange={props.newSelectionHandler}
          value={props.value}>
        </input>
      </div>
    </div>
  )
}

WordLengthField.propTypes = {
  newSelectionHandler: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default WordLengthField
