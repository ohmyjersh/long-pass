import React from 'react'
import PropTypes from 'prop-types'

const SplashImage = ({id, imageUrl}) => {
  return (
    <div id={id}>
      <img alt="lolbutts" src={imageUrl} />
    </div>
  )
}

SplashImage.propTypes = {
  imageUrl: PropTypes.string,
  id: PropTypes.string
}

export default SplashImage
