import './App.css'

import { CustomerStateProvider } from './components/customerState'
import { CustomerContainer } from './components/customerContainer'

function App() {
  return (
    <div className="wrapper">
      <h1>XState Demo</h1>
      <CustomerStateProvider>
        <CustomerContainer />
      </CustomerStateProvider>
    </div>
  )
}

export default App
