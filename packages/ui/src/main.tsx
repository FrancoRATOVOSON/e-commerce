import React from 'react'
import { createRoot } from 'react-dom/client'

export default function App() {
  return <div></div>
}

const container = document.getElementById('app')
if (!container) throw Error('No root element')

const root = createRoot(container)
root.render(<App />)
