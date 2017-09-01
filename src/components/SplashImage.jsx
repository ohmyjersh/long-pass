import React from 'react'
import PropTypes from 'prop-types'

function SplashImage (props) {
  return (
    <div id={props.id}>
      <img src={props.imageUrl} />
    </div>
  )
}

SplashImage.propTypes = {
  imageUrl: PropTypes.string,
  id: PropTypes.string
}

export default SplashImage
