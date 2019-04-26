import React, { useState } from 'react'
import Layout from '../components/core/Layout'
import HeadedList from '../components/composed/HeadedList'
import Checkbox from '../components/composed/CheckboxList'

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
      <HeadedList
        header={'Features'}
        items={[
          'Provide an items list and get a checkbox option per item',
          'It has an onClick handler',
          'You can select multiple items at once',
          'There is a bug where it doesnt remove an item on de-select'
        ]}
      />
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
