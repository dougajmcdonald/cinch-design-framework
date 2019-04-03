import React from 'react'

class HtmlOutput extends React.Component {
  constructor() {
    super()
    this.state = { html: '' }
  }

  componentDidMount() {
    const button = 'button'
    const el = document.getElementById(button).cloneNode(true)
    el.removeAttribute('id')
    el.removeAttribute('class')
    console.log(el)
    el.childNodes.forEach(child => {
      child.removeAttribute && child.removeAttribute('class')
    })
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
          `}
        </style>
      </pre>
    )
  }
}

export default HtmlOutput
