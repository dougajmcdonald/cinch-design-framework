import React from 'react'
import theme from '../../theme/default'
import css from 'styled-jsx/css'

const style = css`
  min-width: 200px;
  padding: ${theme.padding.normal};
  border: 1px solid ${theme.colour.text};
  border-radius: 4px;
  font-weight: bold;

  /* -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; */
  /* background: url(http://www.stackoverflow.com/favicon.ico) 96% / 15% no-repeat
    #eee; */

  option {
    font-weight: normal;
    line-height: 1.5em;
  }
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
