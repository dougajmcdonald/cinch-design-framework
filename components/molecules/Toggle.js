import React from 'react'
import theme from '../../theme/default'
import css from 'styled-jsx/css'

const style = css`
  input {
    display: none;
    box-sizing: border-box;
  }

  input::selection {
    background: none;
  }

  input:checked + label:after {
    left: 50%;
  }

  input:checked + label {
    background: #9fd6ae;
  }

  label {
    outline: 0;
    display: block;
    width: 4em;
    height: 2em;
    position: relative;
    cursor: pointer;
    user-select: none;

    background: ${theme.colour.primary};
    border-radius: 2em;
    padding: 2px;
    transition: all 0.4s ease;
  }

  label:after,
  label:before {
    position: relative;
    display: block;
    content: '';
    width: 50%;
    height: 100%;
  }

  label:after {
    left: 0;
    border-radius: 50%;
    background: #fff;
    transition: all 0.2s ease;
  }

  label:before {
    display: none;
  }
`

const Toggle = () => (
  <div>
    <input id="toggle" type="checkbox" />
    <label htmlFor="toggle" className="toggleLabel" />
    <style jsx>{style}</style>
  </div>
)

export default Toggle
