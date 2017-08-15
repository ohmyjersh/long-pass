import React from 'react'
import PropTypes from 'prop-types'

const WORD_LENGTH_CHOICES = [...Array(10).keys()].map(x => x + 1)
const OPTIONS = WORD_LENGTH_CHOICES.map((num, idx) => {
  return <option value={num} key={idx}>{num}</option>
})

function WordLengthField (props) {
  return (
    <div>
      <label>Max Character Length: </label>
      <select
        onChange={props.newSelectionHandler}
        value={props.value}>
        {OPTIONS}
      </select>
    </div>
  )
}

WordLengthField.propTypes = {
  newSelectionHandler: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default WordLengthField
