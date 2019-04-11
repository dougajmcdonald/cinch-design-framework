import React from 'react'
import Layout from '../components/core/Layout'
import Button from '../components/molecules/Button'
import HeadedList from '../components/composed/HeadedList'

const Page = () => (
  <Layout>
    <h1>Button</h1>
    <p>The 'Button' is a clickable link</p>
    <HeadedList
      header={'Features'}
      items={['You can click on it', 'it has a hover state']}
    />
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
