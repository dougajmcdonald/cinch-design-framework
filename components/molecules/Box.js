import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../theme/default'

const Box = ({ text }) => (
  <div>
    {text}
    <style jsx>
      {`
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${theme.colour.primary};
        color: ${theme.colour.text.light};

        :hover {
          cursor: pointer;
        }
      `}
    </style>
  </div>
)

Box.propTypes = {
  text: PropTypes.string.isRequired
}

export default Box
