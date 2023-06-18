import React, { useState} from "react";
import  { Form, Button} from 'react-bootstrap';
import {BaseColaboradores} from "../../BaseColaboradores";

const Formulario = ({ agregarColaborador}) => {
    // cuerpo formulario // estado del colaborador: 
    const [nombre, setNombre] = useState ('');
    const [correo, setCorreo] = useState ('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');
    // mensaje de error: 
    const [error, setError] = useState('');

    const enviarFormulario = (e) => {
        e.preventDefault();

        //Validacion campos vacios
        if (!nombre || !correo || !edad || !cargo || !telefono){
            setError('Todos los campos son obligatorios')
            return
        }

        const nuevoColaborador = {
            id: BaseColaboradores.length + 1,
            nombre,
            correo,
            edad,
            cargo,
            telefono,
        };
        //Limpiamos el formulario
        agregarColaborador(nuevoColaborador);

        setNombre('');
        setCorreo('');
        setEdad('');
        setCargo('');
        setTelefono('')
        setError('');
    }; 



    return (
        <Form onSubmit={enviarFormulario}>
            <Form.Group controlId="nombre">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </Form.Group>
    
            <Form.Group controlId="correo">
            <Form.Label>Correo:</Form.Label>
            <Form.Control type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
            </Form.Group>
    
            <Form.Group controlId="edad">
            <Form.Label>Edad:</Form.Label>
            <Form.Control type="number" value={edad} onChange={(e) => setEdad(e.target.value)}/>
            </Form.Group>
    
            <Form.Group controlId="cargo">
            <Form.Label>Cargo:</Form.Label>
            <Form.Control type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} />
            </Form.Group>
    
            <Form.Group controlId="telefono">
            <Form.Label>Teléfono:</Form.Label>
            <Form.Control type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
            </Form.Group>
    
            {error && <p>{error}</p>}
    
            <Button className="btn btn-success btn-block w-100 pt-1 pb-1" type="submit">Agregar Colaborador</Button>
        </Form>
        );
    };
    
    export default Formulario;