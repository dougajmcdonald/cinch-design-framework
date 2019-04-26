import React from 'react'
import css from 'styled-jsx/css'
import Radio from '../form/Radio'

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

const RadioList = ({ items, onClick }) => (
  <section id="radio">
    <ul>
      {items.map(item => (
        <li key={item}>
          <Radio item={item} onClick={onClick} />
        </li>
      ))}
    </ul>

    <style jsx>{style}</style>
  </section>
)

export default RadioList
