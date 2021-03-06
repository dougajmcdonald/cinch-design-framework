import React from 'react'
import theme from '../../theme/default'
import css from 'styled-jsx/css'

const style = css`
  input {
    min-width: 200px;
    padding: ${theme.padding.field};
    border: 1px solid ${theme.colour.border};
    border-radius: 2px;
    color: #777;

    font-size: 1.5em;
    font-family: 'Open sans', sans-serif;
    font-weight: 200;
  }

  input:focus {
    outline-color: ${theme.colour.primary};
  }
`

const TextField = () => (
  <div>
    <input type="text" id="textfield" />
    <style jsx>{style}</style>
  </div>
)

export default TextField
