import './App.css'
import Listado from './assets/components/Listado'
import Formulario from './assets/components/Formulario'
import { useState } from 'react'
import BaseColaboradores from './BaseColaboradores'


function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    const newColaborators = [...colaboradores];
    newColaborators.push(nuevoColaborador);
    setColaboradores(newColaborators);
  };

  return (
    <>
    <div>
    <h2>Lista de Colaboradores</h2>
      <Listado colaboradores={colaboradores} /> 
      <h2> Agregar Colaborador</h2>
      <Formulario agregarColaborador={agregarColaborador}/>
    </div>
    </>
  )
}

export default App
