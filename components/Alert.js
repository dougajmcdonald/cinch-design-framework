import React from 'react'
import Button from './molecules/Button'
import theme from './../theme/default'

const Alert = ({ children }) => (
  <div>
    <aside className="alert">
      {children}
      <Button>Ok</Button>
    </aside>
    <style jsx>
      {`
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);

        display: flex;
        align-items: center;
        justify-content: center;

        .alert {
          font-size: 2em;
          position: relative;
          min-width: 25%;
          width: 50%;
          min-height: 100px;
          height: auto;
          background-color: ${theme.colour.primary};
          color: ${theme.colour.text.light};
        }
      `}
    </style>
  </div>
)

export default Alert
