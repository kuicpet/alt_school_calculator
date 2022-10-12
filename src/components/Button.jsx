import React from 'react'
import styled from 'styled-components'

const Button = ({ className, value, onClick }) => {
  return (
    <Container className={className} onClick={onClick}>
      {value}
    </Container>
  )
}

export const Container = styled.button`
  border: none;
  background-color: white;
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid black;
  outline: none;
  &:hover {
    //background-color: rgb(61, 43, 184);
    background-color: black;
    color: white;
  }
`
export default Button
