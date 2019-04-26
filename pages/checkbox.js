import React from 'react'
import Layout from '../components/core/Layout'
import Checkbox from '../components/form/Checkbox'

const items = ['bananas', 'coke', 'chocolate', 'blueberries', 'salad cream']

const Page = () => (
  <Layout>
    <h1>Checkbox</h1>
    <p>The 'Checkbox' is used to display an option which can select</p>
    <Checkbox items={items} />
  </Layout>
)

export default Page
