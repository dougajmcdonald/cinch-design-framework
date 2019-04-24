import React from 'react'
import Layout from '../components/core/Layout'
import Dropdown from '../components/form/Dropdown'
import HeadedList from '../components/composed/HeadedList'

const Page = () => (
  <Layout>
    <h1>Dropdown</h1>
    <p>The 'Dropdown' is styled `select` element</p>
    <p />
    <p>Warning: This may have some issues with IE 10/11</p>
    <HeadedList
      header={'Features'}
      items={[
        'It will display a list of `items` you pass in as <option> elements',
        'The `options` within it arent really styled',
        'Has an `onSelect` event'
      ]}
    />
    <Dropdown />
  </Layout>
)

export default Page
