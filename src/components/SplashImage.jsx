import React from 'react'
import PropTypes from 'prop-types'

function SplashImage (props) {
  return (
    <div>
      <img src={props.imageUrl} />
    </div>
  )
}

SplashImage.propTypes = {
  imageUrl: PropTypes.string
}

export default SplashImage
