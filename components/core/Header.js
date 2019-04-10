import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import theme from '../../theme/default'
import logo from '../../img/logo.svg'

const Header = ({ title }) => (
  <div>
    <Link href={'/'}>
      <span>
        <img src={logo} />
        {title}
      </span>
    </Link>
    <style jsx>{`
      height: ${theme.size.header};

      background-color: ${theme.colour.primary};

      span {
        color: ${theme.colour.text.light};
        margin: 0 0 0 40px;
        line-height: 80px;
        font-size: 3em;
        font-family: 'Open sans', sans-serif;
        font-weight: 300;
      }

      span:hover {
        cursor: pointer;
      }

      img {
        height: 55px;
        margin-right: 10px;
        padding-top: 20px;
      }
    `}</style>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
