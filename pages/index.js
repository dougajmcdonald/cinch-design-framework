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

const links = [
  { text: 'Box', href: 'box' },
  { text: 'Button', href: 'button' },
  { text: 'Alert', href: 'alert' },
  { text: 'Toggle', href: 'toggle' },
  { text: 'Dropdown', href: 'dropdown' },
  { text: 'TextField', href: 'textfield' },
  { text: 'Typography', href: 'typography' }
]

const Index = () => (
  <Layout>
    <BoxNav links={links} />
  </Layout>
)

export default Index
