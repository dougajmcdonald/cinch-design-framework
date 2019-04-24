import React from 'react'
import Layout from '../components/core/Layout'
import Radio from '../components/form/Radio'

const items = ['bananas', 'coke', 'chocolate', 'blueberries', 'salad cream']

const Page = () => (
  <Layout>
    <h1>Radio</h1>
    <p>The 'Radio' is used to display a list of mutually exclusive options</p>
    <Radio items={items} />
  </Layout>
)

export default Page
