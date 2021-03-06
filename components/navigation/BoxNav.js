import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import theme from '../../theme/default'
import Box from '../molecules/Box'

const BoxNav = ({ links }) => (
  <section>
    {links.map(link => (
      <Link key={link.href} href={link.href}>
        <Box>
          <h4>{link.text}</h4>
        </Box>
      </Link>
    ))}
    <style jsx>
      {`
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns: repeat(
          ${parseInt(Math.sqrt(links.length), 10)},
          1fr
        );
        grid-row-gap: ${theme.padding.normal};
        grid-column-gap: ${theme.padding.normal};
      `}
    </style>
  </section>
)

BoxNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  )
}

export default BoxNav
