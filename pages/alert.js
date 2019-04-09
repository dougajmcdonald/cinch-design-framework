import React, { useState } from 'react'
import Layout from '../components/core/Layout'
import Alert from '../components/Alert'
import Button from '../components/molecules/Button'
import CssContext from '../context/CssContext'

const Page = () => {
  const [show, toggleDisplay] = useState(true)

  return (
    <Layout>
      <h1>Alert</h1>
      <p>The alert is a simple message with a button to dismiss it</p>
      <p>
        <em>
          Note I can't click the button underneath the alert Modal container
          until I 'OK' the alert.
        </em>
      </p>
      <Button
        onClick={() => {
          toggleDisplay(!show)
        }}
      >
        Show alert
      </Button>
      <CssContext.Consumer>
        {({ setStyles }) => (
          <Alert
            show={show}
            toggleDisplay={toggleDisplay}
            setStyles={setStyles}
          >
            <h1>Alert!</h1>
            <p>
              this is an alert message. It's designed to present information
              which should be ackowledged. You can put whatever{' '}
              <code>children</code> you want in here, text, html, other react
              components etc.
            </p>
            <p>It will always come with a button to confirm the alert.</p>
          </Alert>
        )}
      </CssContext.Consumer>
    </Layout>
  )
}

export default Page
