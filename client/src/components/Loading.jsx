import React from 'react'
import styled from 'styled-components'

const StyledLoading = styled.div`
  position: absolute;
  width: 200px;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid #777;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(5px);
  font-size: 18px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Loading() {
  return <StyledLoading>Loading...</StyledLoading>
}
