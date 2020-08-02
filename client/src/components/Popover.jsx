import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledPopover = styled.div`
  position: absolute;
  width: 240px;
  padding: 16px;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(2px);
  font-size: 18px;
  color: #000;
`

export default function Popover(props) {
  return <StyledPopover>{props.children}</StyledPopover>
}

Popover.propTypes = {
  children: PropTypes.any,
}
