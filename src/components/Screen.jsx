import React from 'react'
import { Textfit } from 'react-textfit'
import styled from 'styled-components'

const Screen = ({ value }) => {
  return (
    <Textfit mode='single' max={70}>
      <Container>{value}</Container>
    </Textfit>
  )
}

export const Container = styled.div`
  height: 6.25rem;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  //background-color: #4357692d;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: black;
  font-weight: bold;
  box-sizing: border-box;
`
export default Screen
