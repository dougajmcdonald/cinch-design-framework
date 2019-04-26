import React from 'react'
import theme from '../../theme/default'
import css from 'styled-jsx/css'

const style = css`

`

const Checkbox = ({ items, onClick }) => (
  <section id="checkbox" onClick={onClick}>

      {items.map(item => (

      ))}


    <style jsx>{style}</style>
  </section>
)

export default Checkbox
