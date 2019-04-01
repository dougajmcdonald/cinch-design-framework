import React from 'react'
import Layout from '../components/core/Layout'
import Alert from '../components/Alert'

const Page = () => (
  <Layout>
    <h1>Alert</h1>
    <p>The alert is a simple message with a button to dismiss it</p>
    <Alert>Alert!, this is an alert</Alert>
  </Layout>
)

export default Page
