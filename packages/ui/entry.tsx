/* eslint-disable import/no-extraneous-dependencies */
import { createRoot } from 'react-dom/client'
import './style.css'

const domRoot = document.getElementById("root")

function App() {
  return (
    <div>Hello</div>
  )
}

if (domRoot) {
  const root = createRoot(domRoot)
  root.render(<App/>)
}