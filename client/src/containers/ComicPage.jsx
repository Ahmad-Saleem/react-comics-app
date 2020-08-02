import React from 'react'
import PropTypes from 'prop-types'

import Card from '../components/Card'
import withData from '../utils/hocs/withData'

function ComicPage(props) {
  return (
    <div>
      <h1>Comics</h1>
      <div>
        <Card {...props.data} />
      </div>
    </div>
  )
}

ComicPage.propTypes = {
  data: PropTypes.object,
}

export default withData(ComicPage)
