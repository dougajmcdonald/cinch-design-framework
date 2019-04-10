import React, { useState } from 'react'
import Frame from './Frame'
import Header from './Header'
import Body from './Body'
import theme from '../../theme/default'
import HtmlOutput from './HtmlOutput'
import CssContext from '../../context/CssContext'
// import 'typeface-fira-sans'
import Head from 'next/head'

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
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Sans:200,400"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400"
            rel="stylesheet"
          />
        </Head>
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

              ol,
              ul {
                list-style: none;
              }

              img {
                max-width: 100%;
                height: auto;
              }

              h1 {
                font-size: 4em;
                font-weight: 800;
                line-height: 2em;
                letter-spacing: 0.1em;
              }

              h2 {
                font-size: 3em;
                font-weight: 600;
                line-height: 2em;
                letter-spacing: 0.1em;
              }

              h3 {
                font-size: 2.2em;
                font-weight: bold;
                line-height: 2em;
              }

              h4 {
                font-size: 2em;
                font-weight: bold;
                line-height: 2em;
              }

              p {
                font-size: 1.4em;
                font-weight: 200;
                line-height: 1.4em;
                margin: 1em 0em;
                font-family: 'Open sans', sans-serif;
              }
            `}
          </style>
        </Frame>
      </CssContext.Provider>
    )
  }
}

export default Layout
