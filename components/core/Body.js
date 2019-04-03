import React from 'react'

const Body = ({ children }) => (
  <section>
    {children}
    <style jsx>
      {`
        display: grid;
        grid-template-columns: 1fr 25%;
        padding: 40px;
      `}
    </style>
  </section>
)

export default Body
