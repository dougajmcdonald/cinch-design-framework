import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../theme/default'

const Box = ({ text, onClick }) => (
  <div onClick={onClick}>
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
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Box
