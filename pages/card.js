import React from 'react'
import Layout from '../components/core/Layout'
import Card from '../components/composed/Card'
import HeadedList from '../components/composed/HeadedList'
import person from '../img/icons/md-body.svg'

const Page = () => (
  <Layout>
    <h1>Card</h1>
    <p>
      The 'Card' is composite component with a header and something to hold
      content.
    </p>
    <p>
      Optionally you can pop on other things like a toolbar or close button.
    </p>
    <HeadedList
      header={'Features'}
      items={[
        'You can place HTML or any other react components inside it',
        'it has a themed topbar',
        'it has a suble dropshadow'
      ]}
    />
    <Card header={'Populated card'}>
      <h4>Doug McDonald</h4>
      <p>I am the author of this framework, I hope you enjoy it.</p>
      <img src={person} width="100" height="100" />
    </Card>
    <Card header={'Basic empty card'}>Content</Card>
  </Layout>
)

export default Page
