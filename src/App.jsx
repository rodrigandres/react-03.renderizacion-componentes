import './App.css'
import AlertMessage  from './assets/components/Alert'
import Listado from './assets/components/Listado'
import Formulario from './assets/components/Formulario'
import Buscador from './assets/components/Buscador'
import { useState } from 'react'
import BaseColaboradores from './BaseColaboradores'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [message, setMessage] = useState('');
  const [bsStyle, setBsStyle] = useState('danger');
  const [resultadoBusqueda, setResultadoBusqueda] = useState(undefined)

  const agregarColaborador = (nuevoColaborador) => {
    const newColaborators = [...colaboradores];
    newColaborators.push(nuevoColaborador);
    setColaboradores(newColaborators);
  };

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col col-md-8'>
          <h2 style={{ padding: 10, textAlign: "left" }}>Lista de Colaboradores</h2>
          <Buscador colaboradores={colaboradores} setResultadoBusqueda={setResultadoBusqueda} /> 
          <Listado colaboradores={resultadoBusqueda || colaboradores} /> 
        </div>
        <div className='col'>
          <h2> Agregar Colaborador</h2>
          <Formulario colaboradores={colaboradores} agregarColaborador={agregarColaborador} setMessage={setMessage} setBsStyle={setBsStyle}/>
          <AlertMessage  message={message} bsStyle={bsStyle} show={message !== ''}/>
        </div>
      </div>
    </div>
  )
}

export default App
