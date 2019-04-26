import React, { useState } from 'react'
import Layout from '../components/core/Layout'
import Radio from '../components/form/Radio'
import HeadedList from '../components/composed/HeadedList'

const items = ['bananas', 'coke', 'chocolate', 'blueberries', 'salad cream']

const Page = () => {
  const [item, selectItem] = useState('nothing')

  return (
    <Layout>
      <h1>Radio</h1>
      <p>The 'Radio' is used to display a list of mutually exclusive options</p>
      <p>
        <b>{item}</b> is selected
      </p>
      <HeadedList
        header={'Features'}
        items={[
          'Provide an items list and get a radio option per item',
          'It has an onClick handler'
        ]}
      />
      <Radio items={items} onClick={item => selectItem(item)} />
    </Layout>
  )
}

export default Page
