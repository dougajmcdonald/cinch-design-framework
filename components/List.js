import React from 'react'
import theme from '../theme/default'
import css from 'styled-jsx/css'
import tick from '../img/icons/md-checkmark.svg'

const style = css`
  margin: 1em 0;

  li {
    background: url(${tick}) no-repeat;
    display: list-item;
    padding-left: ${theme.padding.big};
    margin: 0.5em 0;
  }
`

const List = ({ items }) => (
  <ul id="list">
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
    <style jsx>{style}</style>
  </ul>
)

export default List
