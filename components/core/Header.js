import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import theme from '../../theme/default'

const Header = ({ title }) => (
  <div>
    <Link href={'/'}>
      <h1>{title}</h1>
    </Link>
    <style jsx>{`
      height: ${theme.size.header};

      background-color: ${theme.colour.primary};

      h1 {
        color: ${theme.colour.text.light};
        margin: 0 0 0 40px;
        line-height: 80px;
      }

      h1:hover {
        cursor: pointer;
      }
    `}</style>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
