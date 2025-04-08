import { useState } from 'react'
import './App.css'
import BusquedaInc from './components/Busqueda'
import Rol from './components/Prueba'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BusquedaInc></BusquedaInc>
  )
}

export default App
