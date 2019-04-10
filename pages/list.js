import React from 'react'
import Layout from '../components/core/Layout'
import List from '../components/List'

const items = ['bananas', 'coke', 'chocolate', 'blueberries', 'salad cream']

const Page = () => (
  <Layout>
    <h1>List</h1>
    <p>The 'List' is used to display collections of items</p>
    <List items={items} />
  </Layout>
)

export default Page
