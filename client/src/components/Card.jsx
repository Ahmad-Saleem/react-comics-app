import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Popover from './Popover'

export default function Card(props) {
  const [popover, setPopover] = useState(false)

  const mouseOverHandler = useCallback(() => {
    setPopover(true)
  }, [])

  const mouseOutHandler = useCallback(() => {
    setPopover(false)
  }, [])

  return (
    <div
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
      style={{ position: 'relative' }}>
      {popover && <Popover>{props.alt}</Popover>}
      <a href={`https://xkcd.com/${props.id}/`}>
        <img src={props.img} alt={props.alt} />
        <h3>{props.title}</h3>
      </a>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
}
