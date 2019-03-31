import React from 'react'

const Body = ({ children }) => (
  <section>
    {children}
    <style jsx>
      {`
        padding: 40px;
      `}
    </style>
  </section>
)

export default Body
