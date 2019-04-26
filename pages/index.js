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
  { text: 'Box', href: 'box', type: 'general' },
  { text: 'Button', href: 'button', type: 'form' },
  { text: 'Alert', href: 'alert', type: 'composed' },
  { text: 'Toggle Switch', href: 'toggle', type: 'form' },
  { text: 'Dropdown', href: 'dropdown', type: 'form' },
  { text: 'TextField', href: 'textfield', type: 'form' },
  { text: 'Typography', href: 'typography', type: 'general' },
  { text: 'Simple List', href: 'list', type: 'general' },
  { text: 'Card', href: 'card', type: 'composed' },
  { text: 'Radio List', href: 'radio', type: 'form' },
  { text: 'Checkbox List', href: 'checkbox', type: 'form' }
]

const Index = () => (
  <Layout>
    <h1>General</h1>
    <BoxNav
      links={links
        .filter(x => x.type === 'general')
        .sort((a, b) => a.text.localeCompare(b.text))}
    />
    <h1>Form</h1>
    <BoxNav
      links={links
        .filter(x => x.type === 'form')
        .sort((a, b) => a.text.localeCompare(b.text))}
    />
    <h1>Composed</h1>
    <BoxNav
      links={links
        .filter(x => x.type === 'composed')
        .sort((a, b) => a.text.localeCompare(b.text))}
    />
  </Layout>
)

export default Index
