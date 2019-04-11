import React from 'react'
import List from '../List'
import css from 'styled-jsx/css'

const style = css`
  section {
    padding-bottom: 2em;
  }
`

const HeadedList = ({ header, items }) => (
  <section>
    <h4>{header}</h4>
    <List items={items} />
    <style jsx>{style}</style>
  </section>
)

export default HeadedList
