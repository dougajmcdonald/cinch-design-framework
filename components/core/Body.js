import React from 'react'
import theme from '../../theme/default'

const Body = ({ children }) => (
  <section>
    {children}
    <style jsx>
      {`
        display: grid;
        grid-template-columns: 1fr 25%;
        grid-column-gap: 40px;
        padding: 40px;
        background-color: ${theme.colour.background};
      `}
    </style>
  </section>
)

export default Body
