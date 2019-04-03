import React from 'react'
import theme from '../../theme/default'

const Button = ({ children, onClick }) => (
  <button id="button" onClick={onClick}>
    {children}
    <style jsx>
      {`
        border: none;
        border-radius: 3px;
        background-color: ${theme.colour.primary};
        color: ${theme.colour.text.light};
        padding: 1em 2em;
        font-weight: 700;
        margin: 0.5em 0;

        align-self: center;
        justify-self: center;

        :hover {
          cursor: pointer;
          background-color: ${theme.colour.primaryHover};
        }
      `}
    </style>
  </button>
)

export default Button
