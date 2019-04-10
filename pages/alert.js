import React, { useState } from 'react'
import Layout from '../components/core/Layout'
import Alert from '../components/Alert'
import Button from '../components/molecules/Button'
import CssContext from '../context/CssContext'
import List from '../components/List'

const Page = () => {
  const [show, toggleDisplay] = useState(true)

  return (
    <Layout>
      <h1>Alert</h1>
      <p>The alert is a simple message with a button to dismiss it</p>
      <h4>Features</h4>
      <List
        items={[
          'Modal and prevents you clicking the button below',
          'You can "OK" the alert to dismiss it',
          'You can click the button to show it again'
        ]}
      />
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
