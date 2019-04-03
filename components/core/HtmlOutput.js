import React from 'react'
import { withRouter } from 'next/router'

class HtmlOutput extends React.Component {
  constructor() {
    super()
    this.state = { html: '' }
  }

  removeClassAttribute(el) {
    if (el.removeAttribute) {
      el.removeAttribute('id')
      el.removeAttribute('class')
    }

    el.childNodes.forEach(child => {
      child.removeAttribute && child.removeAttribute('class')
      this.removeClassAttribute(child)
    })
  }

  componentDidMount() {
    const { pathname } = this.props.router
    const pageName = pathname.replace('/', '')
    console.log(pageName)
    const maybeEl = document.getElementById(pageName)

    if (!maybeEl) {
      this.setState({ html: `No component #id matching '${pageName}'` })
      return
    }

    const el = maybeEl.cloneNode(true)

    this.removeClassAttribute(el)

    this.setState({ html: el.outerHTML })
  }

  render() {
    return (
      <pre>
        {this.state.html}
        <style jsx>
          {`
            background-color: white;
            padding: 1em;
            white-space: pre-wrap;
            word-break: keep-all;
          `}
        </style>
      </pre>
    )
  }
}

export default withRouter(HtmlOutput)
