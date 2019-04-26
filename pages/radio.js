import React from 'react'
import Layout from '../components/core/Layout'
import Radio from '../components/form/Radio'
import HeadedList from '../components/composed/HeadedList'

const items = ['bananas', 'coke', 'chocolate', 'blueberries', 'salad cream']

const Page = () => (
  <Layout>
    <h1>Radio</h1>
    <p>The 'Radio' is used to display a list of mutually exclusive options</p>
    <HeadedList
      header={'Features'}
      items={[
        'Provide an items list and get a radio option per item',
        'It has an onClick handler'
      ]}
    />
    <Radio items={items} onClick={item => alert(item)} />
  </Layout>
)

export default Page
