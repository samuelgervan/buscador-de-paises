import { useState } from 'react'

import './App.css'
import { Busqueda } from './component/Busqueda'
import { MostrarResultado } from './component/MostrarResultado'
import { Historial } from './component/Historial'

function App() {
  const [resultado, setResultado] = useState([])
  const [error, setError] = useState (false)

  return (
    <>
      <Busqueda setResultado={setResultado} setError ={setError}/>
      <MostrarResultado resultado={resultado} error={(error)}/>
      <Historial resultado={resultado}/>





    </>
  )
}

export default App
