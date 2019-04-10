import React from 'react'
import Layout from '../components/core/Layout'
import TextField from '../components/form/TextField'

const Page = () => (
  <Layout>
    <h1>TextField</h1>
    <p>The 'TextField' is styled `input` element to contain text</p>
    <p>It has an onChange handler which can hook into validation functions</p>
    <TextField />
  </Layout>
)

export default Page
