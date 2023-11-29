import React from 'react'
import ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')

if (rootElement)
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <div>
        Hello World
      </div>
    </React.StrictMode>,
  )
else
  throw new Error("No root element found");

