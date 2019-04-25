import React from 'react'
import Layout from '../components/core/Layout'

const Page = () => (
  <Layout>
    <h1>Typography</h1>
    <p>The 'Typography' controls the font styles / weights etc for your site</p>
    <h1>Header 1</h1>
    <blockquote>
      font-family: 'Fira sans', 'Open sans', sans-serif; font-size: 4em;
      font-weight: 800; line-height: 2em; letter-spacing: 0.1em;
    </blockquote>
    <h2>Header 2</h2>
    <blockquote>
      font-family: 'Fira sans', 'Open sans', sans-serif; font-size: 3.2em;
      font-weight: 300; line-height: 2em; letter-spacing: 0.1em;
    </blockquote>
    <h3>Header 3</h3>
    <blockquote>
      font-family: 'Fira sans', 'Open sans', sans-serif; font-size: 2.2em;
      font-weight: bold; line-height: 2em;
    </blockquote>
    <h4>Header 4</h4>
    <blockquote>
      font-family: 'Fira sans', 'Open sans', sans-serif; font-size: 2em;
      font-weight: 300; line-height: 2em;
    </blockquote>
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
    <blockquote>
      font-family: 'Open sans', sans-serif; font-size: 1.4em; font-weight: 200;
      line-height: 1.4em; margin: 1em 0em;
    </blockquote>
  </Layout>
)

export default Page
