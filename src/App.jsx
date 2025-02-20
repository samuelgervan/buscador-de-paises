import { useState } from 'react'

import './App.css'
import { Busqueda } from './component/Busqueda'
import { MostrarResultado } from './component/MostrarResultado'

function App() {
  const [resultado, setResultado] = useState([])

  return (
    <>
      <Busqueda setResultado ={setResultado}/>
      <MostrarResultado resultado={resultado}/>

    </>
  )
}

export default App
