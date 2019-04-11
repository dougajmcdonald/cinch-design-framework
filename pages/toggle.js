import React from 'react'
import Layout from '../components/core/Layout'
import Toggle from '../components/molecules/Toggle'
import HeadedList from '../components/composed/HeadedList'

const Page = () => (
  <Layout>
    <h1>Toggle</h1>
    <p>The 'Toggle' is a like a checkbox only cooler looking</p>
    <HeadedList
      header={'Features'}
      items={[
        'Toggle is a "checkbox" at its heart, you can select it on or off',
        'Due to its ambigous styling its hard to tell whether its on or off'
      ]}
    />
    <Toggle />
  </Layout>
)

export default Page
