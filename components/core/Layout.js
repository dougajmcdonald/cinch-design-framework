import React, { useState } from 'react'
import Frame from './Frame'
import Header from './Header'
import Body from './Body'
import theme from '../../theme/default'
import HtmlOutput from './HtmlOutput'
import CssContext from '../../context/CssContext'

class Layout extends React.Component {
  constructor() {
    super()
    this.setStyles = styles => {
      console.log('called', styles, arguments)
      this.setState({
        styles
      })
    }

    this.state = {
      styles: '',
      setStyles: this.setStyles
    }
  }

  render() {
    return (
      <CssContext.Provider value={this.state}>
        <Frame>
          <Header title={'Cinch design framework'} />
          <Body>
            <main>{this.props.children}</main>
            <HtmlOutput styles={this.state.styles} />
          </Body>
          <style jsx global>
            {`
              html {
                box-sizing: border-box;
                font-size: 16px;
                font-family: ${theme.font['font-family']};
              }

              *,
              *:before,
              *:after {
                box-sizing: inherit;
              }

              body,
              h1,
              h2,
              h3,
              h4,
              h5,
              h6,
              p,
              ol,
              ul {
                margin: 0;
                padding: 0;
                font-weight: normal;
              }

              h1 {
                margin: 1em 0em;
              }

              p {
                margin: 1em 0em;
              }

              ol,
              ul {
                list-style: none;
              }

              img {
                max-width: 100%;
                height: auto;
              }
            `}
          </style>
        </Frame>
      </CssContext.Provider>
    )
  }
}

export default Layout
