import React from 'react'
import { withRouter } from 'next/router'
import CssContext from '../../context/CssContext'

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
      <div>
        <pre>
          {this.state.html}
          {/* {this.props.styles} */}
          <style jsx>
            {`
              background-color: white;
              padding: 1em;
              white-space: pre-wrap;
              word-break: break-word;
            `}
          </style>
        </pre>
      </div>
    )
  }
}

HtmlOutput.contextType = CssContext

export default withRouter(HtmlOutput)
