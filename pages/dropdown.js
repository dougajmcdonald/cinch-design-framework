import React from 'react'
import Layout from '../components/core/Layout'
import Dropdown from '../components/molecules/Dropdown'

const Page = () => (
  <Layout>
    <h1>Dropdown</h1>
    <p>The 'Dropdown' is styled `select` element</p>
    <p>The `options` within it aren't really styled</p>
    <p>Warning: This may have some issues with IE 10/11</p>
    <Dropdown />
  </Layout>
)

export default Page
