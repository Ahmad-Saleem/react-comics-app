import React from 'react'
import PropTypes from 'prop-types'

import Card from '../components/Card'
import withData from '../utils/hocs/withData'

function ComicPage(props) {
  return (
    <div className="container">
      <Card {...props.data} />
    </div>
  )
}

ComicPage.propTypes = {
  data: PropTypes.object,
}

export default withData(ComicPage)
