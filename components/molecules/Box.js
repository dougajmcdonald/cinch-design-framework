import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../theme/default'
import css from 'styled-jsx/css'

const style = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${theme.colour.primary};
  color: ${theme.colour.text.light};

  padding: ${theme.padding.big};
  margin: ${theme.padding.normal};

  transition: background-color 150ms;

  :hover {
    cursor: pointer;
    background-color: ${theme.colour.primaryHover};
  }
`

const Box = ({ children, onClick }) => (
  <div id="box" onClick={onClick}>
    {children}
    <style jsx>{style}</style>
  </div>
)

Box.propTypes = {
  onClick: PropTypes.func
}

export default Box
