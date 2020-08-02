import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Popover from './Popover'

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export default function Card(props) {
  const [popover, setPopover] = useState(false)

  const mouseOverHandler = useCallback(() => {
    setPopover(true)
  }, [])

  const mouseOutHandler = useCallback(() => {
    setPopover(false)
  }, [])

  return (
    <StyledCard onMouseEnter={mouseOverHandler} onMouseLeave={mouseOutHandler}>
      {popover && <Popover>{props.alt}</Popover>}
      <a href={`https://xkcd.com/${props.id}/`} title={props.title}>
        <img
          src={props.img}
          alt={props.alt}
          width={500}
          height="auto"
          loading="lazy"
        />
        <h3>{props.title}</h3>
      </a>
    </StyledCard>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
}
