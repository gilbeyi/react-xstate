import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import { inspect } from '@xstate/inspect'

inspect({
  // open in new window
  iframe: false
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
