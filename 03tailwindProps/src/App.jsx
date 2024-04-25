import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card";


function App() {
  // const [count, setCount] = useState(0)

  let details = {
    age: 21,
    College: "DTU",
  }

  return (
    <>
    <h1 className="bg-green-900 p-4 text-white rounded-xl mb-4">
      Tailwind
    </h1>
    <Card username="Joy Nikub" details = {details} />
    <Card username="Narayan Kumar" details = {details} />
    </>
  )
}

export default App
