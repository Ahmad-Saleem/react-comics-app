import React from 'react'
import PropTypes from 'prop-types'

export default function DefaultLayout(props) {
  return <div>{props.children}</div>
}

DefaultLayout.propTypes = {
  children: PropTypes.any,
}
