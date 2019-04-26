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
  { text: 'Typography', href: 'typography' },
  { text: 'List', href: 'list' },
  { text: 'Card', href: 'card' },
  { text: 'Radio', href: 'radio' },
  { text: 'Checkbox', href: 'checkbox' }
]

const Index = () => (
  <Layout>
    <BoxNav links={links.sort((a, b) => a.text.localeCompare(b.text))} />
  </Layout>
)

export default Index
