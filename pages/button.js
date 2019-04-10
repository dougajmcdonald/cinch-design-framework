import React from 'react'
import Layout from '../components/core/Layout'
import Button from '../components/molecules/Button'
import List from '../components/List'

const Page = () => (
  <Layout>
    <h1>Button</h1>
    <p>The 'Button' is a clickable link</p>
    <h4>Features</h4>
    <List items={['You can click on it']} />
    <Button
      onClick={() => {
        alert('I clicked the button')
      }}
    >
      I'm a button
    </Button>
  </Layout>
)

export default Page
