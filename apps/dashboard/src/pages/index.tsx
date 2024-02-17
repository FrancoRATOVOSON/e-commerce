import * as React from 'react'

import { Link } from '@/components'
import { pageList } from '@/lib'
import { invoke } from '@tauri-apps/api/tauri'

function Home() {
  const [greetMsg, setGreetMsg] = React.useState('')
  const [name, setName] = React.useState('')

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke('greet', { name }))
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={e => {
          e.preventDefault()
          greet()
        }}
      >
        <input
          id="greet-input"
          onChange={e => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>

      <p>{greetMsg}</p>
      <div>
        <Link to={pageList.overview.href}>To Overview</Link>
      </div>
    </div>
  )
}

export default Home