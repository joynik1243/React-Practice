import { useState } from 'react'
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import { UserContextProvider } from './context/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React Context API</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
