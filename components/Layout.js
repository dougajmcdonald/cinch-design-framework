import Frame from './Frame'
import Header from './Header'
import theme from '../theme/default'

const Body = ({ children }) => (
  <section>
    {children}
    <style jsx>
      {`
        padding: 40px;
      `}
    </style>
  </section>
)

const Layout = ({ children }) => (
  <Frame>
    <Header title={'Cinch design framework'} />
    <Body>{children}</Body>
    <style jsx global>
      {`
        html {
          box-sizing: border-box;
          font-size: 16px;
          font-family: ${theme.font['font-family']};
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ol,
        ul {
          margin: 0;
          padding: 0;
          font-weight: normal;
        }

        ol,
        ul {
          list-style: none;
        }

        img {
          max-width: 100%;
          height: auto;
        }
      `}
    </style>
  </Frame>
)

export default Layout