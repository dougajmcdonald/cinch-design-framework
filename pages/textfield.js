import React from 'react'
import Layout from '../components/core/Layout'
import TextField from '../components/form/TextField'
import HeadedList from '../components/composed/HeadedList'

const Page = () => (
  <Layout>
    <h1>TextField</h1>
    <p>The 'TextField' is styled `input` element to contain text</p>
    <HeadedList
      header={'Features'}
      items={[
        '"onChange" handler to handle inputting texts and doing validations and stuff'
      ]}
    />
    <TextField />
  </Layout>
)

export default Page
