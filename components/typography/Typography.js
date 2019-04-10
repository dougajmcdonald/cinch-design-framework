import React from 'react'
import theme from '../../theme/default'
import css from 'styled-jsx/css'

const style = css.global`

`

const Typography = () => (
  <div>
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <p>
      Paragraph text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Fusce nulla diam, accumsan tempor mi ac, hendrerit volutpat diam. In
      interdum purus sed eros auctor, vitae pretium elit venenatis. Ut quam
      ante, rutrum eget nulla et, vehicula venenatis nisi. Donec posuere sem
      vitae purus feugiat, eu interdum nibh sagittis. Quisque et mauris sed
      massa scelerisque rutrum. Sed quis urna tincidunt, porta nisi a, imperdiet
      ipsum. Morbi vel nulla sodales, accumsan mi vel, blandit mauris. Ut vitae
      sollicitudin ligula, eget tincidunt lacus. Fusce suscipit consectetur
      condimentum. Donec hendrerit at velit eu maximus. Maecenas sem quam,
      bibendum id molestie quis, luctus mattis neque. Donec non euismod quam.
      Cras tempus, nisl vitae sollicitudin facilisis, nunc mi vehicula dui, in
      varius dui elit at risus. Cras tellus turpis, pellentesque non neque non,
      laoreet condimentum elit. Sed aliquet risus lectus, et varius ex cursus
      rutrum. Curabitur volutpat pretium risus, id tincidunt urna congue eu.
    </p>
    <style jsx global>
      {style}
    </style>
  </div>
)

export default Typography
