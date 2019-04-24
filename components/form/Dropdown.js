import React from 'react'
import theme from '../../theme/default'
import css from 'styled-jsx/css'

const style = css`
  min-width: 300px;
  padding: ${theme.padding.normal};
  border-radius: 4px;
  font-family: 'Open sans', sans-serif;
  font-weight: 200;
  font-size: 1.4em;
`

const Dropdown = ({ onClick }) => (
  <select id="dropdown" onClick={onClick}>
    <option>Cakes</option>
    <option>Biscuits</option>
    <option>Jaffa Cakes</option>
    <option>Ginger Nuts</option>
    <style jsx>{style}</style>
  </select>
)

export default Dropdown
