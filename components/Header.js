import React from 'react'
import Link from 'next/link'
import theme from '../theme/default'

const Header = ({ title }) => (
  <div>
    <h1>{title}</h1>
    {/* <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link> */}
    <style jsx>{`
      width: 100%;
      height: ${theme.size.header};

      background-color: ${theme.colour.primary};

      h1 {
        color: ${theme.colour.text.light};
        margin: 0 0 0 40px;
        line-height: 80px;
      }
    `}</style>
  </div>
)

export default Header
