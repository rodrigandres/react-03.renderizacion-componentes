import './App.css'
import AlertMessage  from './assets/components/Alert'
import Listado from './assets/components/Listado'
import Formulario from './assets/components/Formulario'
import { useState } from 'react'
import BaseColaboradores from './BaseColaboradores'


function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [message, setMessage] = useState('');
  const [bsStyle, setBsStyle] = useState('danger');

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
      <Formulario agregarColaborador={agregarColaborador} setMessage={setMessage} setBsStyle={setBsStyle}/>
      <AlertMessage message={message} bsStyle={bsStyle} show={message !== ''}/>
    </div>
    </>
  )
}

export default App
