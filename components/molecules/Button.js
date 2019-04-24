import React from 'react'
import theme from '../../theme/default'
import css from 'styled-jsx/css'

const style = css`
  border: none;
  border-radius: 3px;
  background-color: ${theme.colour.primary};
  color: ${theme.colour.text.light};
  padding: ${theme.padding.button};
  font-weight: 200;
  margin: 0.5em 0;
  font-size: 1.4em;
  font-family: 'Open sans', sans-serif;

  align-self: center;
  justify-self: center;

  transition: background-color 150ms;

  :hover {
    cursor: pointer;
    background-color: ${theme.colour.primaryHover};
  }
`

const Button = ({ children, onClick }) => (
  <button id="button" onClick={onClick}>
    {children}
    <style jsx>{style}</style>
  </button>
)

export default Button
