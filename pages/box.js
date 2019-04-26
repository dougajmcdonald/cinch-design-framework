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
    <Box>
      <p>I'm a box!</p>
    </Box>
    <Box>
      <h4>Picture box</h4>
      <p>This is a box with some text and an image.</p>
      <img src="https://i.ytimg.com/vi/Ir7UmJ_foHs/hqdefault.jpg" />
    </Box>
  </Layout>
)

export default Page
