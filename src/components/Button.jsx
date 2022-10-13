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
  background-color: white;
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid black;
  outline: none;
  left: -4px;
  top: -4px;
  z-index: 2;
  box-shadow: 1px 3px black ;
  transition:0.1s ease-in-out ;
  &:hover {
    background-color: black;
    color: white;
  }
  &:active {
    transform: translateY(4px) ;
    box-shadow:0 0 0 ;
  }
`
export default Button
