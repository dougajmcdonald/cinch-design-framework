import React from 'react'
import Layout from '../components/core/Layout'
import Alert from '../components/Alert'
import Button from '../components/molecules/Button'

const Page = () => (
  <Layout>
    <h1>Alert</h1>
    <p>The alert is a simple message with a button to dismiss it</p>
    <p>
      <em>Note I can't click the button underneath the Modal container</em>
    </p>
    <Button
      onClick={e => {
        alert('I clicked the button')
      }}
    >
      I'm a button
    </Button>
    <Alert>
      Alert!, this is an alert, this is an alert, this is an alert, this is an
      alert
    </Alert>
  </Layout>
)

export default Page
