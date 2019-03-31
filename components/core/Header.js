import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../theme/default'

const Header = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <style jsx>{`
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

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
