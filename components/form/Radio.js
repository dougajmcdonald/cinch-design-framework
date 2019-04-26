import React from 'react'
import css from 'styled-jsx/css'
import theme from '../../theme/default'

const style = css`
  .container {
    display: flex;
    align-items: center;
    height: ${theme.size.list};
    margin: ${theme.padding.normal};
  }

  .container:hover .check {
    border: 5px solid ${theme.colour.primaryHover};
  }

  .container:hover label {
    color: ${theme.colour.primary};
  }

  input {
    appearance: none;
  }

  label {
    font-size: 1.4em;
    font-weight: 300;
    z-index: 9;
    cursor: pointer;
    transition: all 0.25s linear;
    margin-left: -40px;
    padding-left: 60px;
  }

  .check {
    border: 5px solid ${theme.colour.grey};
    border-radius: 100%;
    height: 2em;
    width: 2em;
    z-index: 5;
    cursor: pointer;
    transition: all 250ms linear;
  }

  .check::before {
    content: '';
    border-radius: 100%;
    width: 2em;
    height: 2em;
    margin: auto;

    transition: background-color 250ms linear;
  }

  input:checked ~ .check {
    border: 5px solid ${theme.colour.primary};
    background-color: ${theme.colour.primary};
  }

  input:checked ~ .check::before {
    background-color: ${theme.colour.primary};
  }

  input:checked ~ label {
    color: ${theme.colour.primary};
  }

  input:focus:not(:checked) ~ label {
    padding: 0.5em 1em 0.5em 60px;
    border: 1px dashed ${theme.colour.primary};
  }
`

const Radio = ({ onClick, item }) => (
  <div className="container">
    <input
      type="radio"
      id={`${item}-option`}
      name="selector"
      onClick={() => onClick(item)}
    />
    <div className="check" />
    <label htmlFor={`${item}-option`}>{item}</label>
    <style jsx>{style}</style>
  </div>
)

export default Radio
