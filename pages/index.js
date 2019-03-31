import React from 'react'
import Layout from '../components/core/Layout'
import BoxNav from '../components/navigation/BoxNav'

const makeLinks = number => {
  const links = []
  for (let i = 0; i < number; i++) {
    links.push({ text: `Link ${i}`, href: `/link${i}` })
  }
  return links
}

const Index = () => (
  <Layout>
    <BoxNav links={makeLinks(18)} />
  </Layout>
)

export default Index
