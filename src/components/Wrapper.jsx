import React from 'react'
import styled from 'styled-components'

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>
}

export const Container = styled.div`
  width: 18.25rem;
  height: 30.75rem;
  padding: 8px;
  border-radius: 10px;
  border: 2px solid black;
`
export default Wrapper
