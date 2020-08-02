import React from 'react'
import PropTypes from 'prop-types'

export default function Popover(props) {
  return (
    <div style={{ position: 'absolute', width: 200, height: 200 }}>
      {props.children}
    </div>
  )
}

Popover.propTypes = {
  children: PropTypes.any,
}
