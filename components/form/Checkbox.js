import React from 'react'
import theme from '../../theme/default'
import css from 'styled-jsx/css'

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

  ul > li {
    display: flex;
    align-items: center;
    height: ${theme.size.list};
    margin: ${theme.padding.normal};
  }

  ul li input[type='checkbox'] {
    appearance: none;
  }

  input[type='checkbox']:focus ~ label {
    padding: 0.5em 1em 0.5em 60px;
    border: 1px dashed ${theme.colour.primary};
  }

  ul li label {
    font-size: 1.4em;
    font-weight: 300;
    z-index: 9;
    cursor: pointer;
    transition: all 0.25s linear;
    margin-left: -40px;
    padding-left: 60px;
  }

  ul li:hover label {
    color: ${theme.colour.primary};
  }

  ul li .check {
    border: 5px solid ${theme.colour.grey};
    height: 2em;
    width: 2em;
    z-index: 5;
    cursor: pointer;
    transition: all 250ms linear;
  }

  ul li:hover .check {
    border: 5px solid ${theme.colour.primaryHover};
  }

  ul li .check::before {
    content: '';
    height: 2em;
    width: 2em;
    margin: auto;

    transition: background-color 250ms linear;
  }

  input[type='checkbox']:checked ~ .check {
    border: 5px solid ${theme.colour.primary};
    background-color: ${theme.colour.primary};
  }

  input[type='checkbox']:checked ~ .check::before {
    background-color: ${theme.colour.green};
  }

  input[type='checkbox']:checked ~ label {
    color: ${theme.colour.primary};
  }
`

const Checkbox = ({ items, onClick }) => (
  <section id="checkbox">
    <ul>
      {items.map(item => (
        <li key={item}>
          <input
            type="checkbox"
            id={`${item}-option`}
            name="selector"
            onChange={() => onClick(item)}
          />
          <div className="check" />
          <label htmlFor={`${item}-option`}>{item}</label>
        </li>
      ))}
    </ul>
    <style jsx>{style}</style>
  </section>
)

export default Checkbox
