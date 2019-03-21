import theme from '../theme/default'

const Frame = ({ children }) => (
  <section>
    {children}
    <style jsx>
      {`
        width: 100vw;
        height: 100vh;

        display: grid;
        grid-template-rows: ${theme.size.header} auto;

        background: ${theme.colour.background};
        color: ${theme.colour.light};
      `}
    </style>
  </section>
)

export default Frame
