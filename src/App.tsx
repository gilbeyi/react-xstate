import './App.css'

import { CustomerStateProvider } from './components/customerState'
import { CustomerContainer } from './components/customerContainer'

function App() {
  return (
    <div className="App">
      <h1>XState</h1>
      <CustomerStateProvider>
        <CustomerContainer />
      </CustomerStateProvider>
    </div>
  )
}

export default App
