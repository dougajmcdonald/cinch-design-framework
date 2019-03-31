import React from 'react'
import Layout from '../components/core/Layout'
import BoxNav from '../components/navigation/BoxNav'

const links = [
  { text: 'Home', href: '/index' },
  { text: 'Component 2', href: '/about' },
  { text: 'Component 3', href: '/page3' },
  { text: 'Component 4', href: '/page4' },
  { text: 'Component 5', href: '/page5' },
  { text: 'Component 6', href: '/page6' },
  { text: 'Component 7', href: '/page7' },
  { text: 'Component 8', href: '/page8' },
  { text: 'Component 9', href: '/page9' }
]

const Index = () => (
  <Layout>
    <BoxNav links={links} />
  </Layout>
)

export default Index
