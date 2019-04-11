import React from 'react'
import Layout from '../components/core/Layout'
import Box from '../components/molecules/Box'
import List from '../components/List'
import HeadedList from '../components/composed/HeadedList'

const Page = () => (
  <Layout>
    <h1>Box</h1>
    <p>The 'Box' is a generic rectangular shape</p>
    <HeadedList
      header={'Features'}
      items={[
        'Its a Box, which will render any children you put in it',
        'You can put other components inside it',
        'Has default padding, but will adjust to its content'
      ]}
    />
    <Box>I'm a box!</Box>
  </Layout>
)

export default Page
