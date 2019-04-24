import React from 'react'
import css from 'styled-jsx/css'
import theme from '../../theme/default'

const style = css`
  font-family: 'Open sans', sans-serif;
  font-weight: 200;

  header {
    background-color: ${theme.colour.primary};
    color: ${theme.colour.text.light};
    padding: 0.5em 1em;
  }
  main {
    background-color: ${theme.colour.text.light};
    padding: 1em;
  }
  section {
    display: inline-block;
    width: 40%;
    box-shadow: 2px 5px 5px #999;
    margin: 1em;
  }
`

const Card = ({ header, children }) => (
  <section id="card">
    <header>
      <span>{header}</span>
    </header>
    <main>{children}</main>
    <style jsx>{style}</style>
  </section>
)

export default Card
