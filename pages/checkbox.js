import React, { useState } from 'react'
import Layout from '../components/core/Layout'
import Checkbox from '../components/form/Checkbox'

const items = ['bananas', 'coke', 'chocolate', 'blueberries', 'salad cream']

const Page = () => {
  const [selectedItems, selectItem] = useState([])

  return (
    <Layout>
      <h1>Checkbox</h1>
      <p>
        The 'Checkbox' is used to display an list of options which can have
        multiple items selected
      </p>
      <p>
        <b>{selectedItems.map(i => `${i} `)}</b> are selected
      </p>
      <Checkbox
        items={items}
        onClick={item =>
          selectItem([...selectedItems.filter(x => x !== item), item])
        }
      />
    </Layout>
  )
}

export default Page
