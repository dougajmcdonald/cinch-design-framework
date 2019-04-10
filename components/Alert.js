import React from 'react'
import Button from './molecules/Button'
import theme from './../theme/default'
import css from 'styled-jsx/css'

const styles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  section {
    padding: ${theme.padding.field};
    position: relative;
    min-width: 25%;
    width: 50%;
    min-height: 100px;
    height: auto;

    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;

    border-radius: 3px;

    background-color: ${theme.colour.background};
    color: ${theme.colour.text.dark};
  }
`

class Alert extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { setStyles } = this.props
    setStyles(styles)
  }

  render() {
    const { children, show, toggleDisplay } = this.props
    return (
      show && (
        <div id="alert">
          <section>
            {children}
            <Button onClick={() => toggleDisplay(!show)}>Ok</Button>
          </section>
          <style jsx>{styles}</style>
        </div>
      )
    )
  }
}

export default Alert
