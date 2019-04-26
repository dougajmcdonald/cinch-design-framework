import React from 'react'
import theme from '../../theme/default'
import css from 'styled-jsx/css'
import Checkbox from '../form/Checkbox'

const style = css`
  section {
    height: auto;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
  }
`

const CheckboxList = ({ items, onClick }) => (
  <section id="checkbox">
    <ul>
      {items.map(item => (
        <li key={item}>
          <Checkbox item={item} onChange={onClick} />
        </li>
      ))}
    </ul>
    <style jsx>{style}</style>
  </section>
)

export default CheckboxList
