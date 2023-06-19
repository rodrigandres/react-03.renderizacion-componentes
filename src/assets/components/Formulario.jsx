import React, { useState} from "react";
import  { Form, Button} from 'react-bootstrap';
import {BaseColaboradores} from "../../BaseColaboradores";

const Formulario = ({ colaboradores, setMessage, setBsStyle, agregarColaborador}) => {
    // Cuerpo formulario // Estado del colaborador: 
    const [nombre, setNombre] = useState ('');
    const [correo, setCorreo] = useState ('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');

    const enviarFormulario = (e) => {
        e.preventDefault();

        //Validacion campos vacios
        if (!nombre || !correo || !edad || !cargo || !telefono){
            setMessage('Todos los campos son obligatorios');
            return
        }

        const nuevoColaborador = {
            id: colaboradores.length + 1,
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
        setMessage('');

        setMessage('Colaborador agregado !');
        setBsStyle('success');
    }; 



    return (
        <Form className="d-flex flex-column form-group gap-3" onSubmit={enviarFormulario}>
            <Form.Group controlId="nombre">
            <Form.Control type="text" placeholder='Nombre del colaborador' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </Form.Group>
    
            <Form.Group controlId="correo">
            <Form.Control type="email" placeholder='Email del colaborador' value={correo} onChange={(e) => setCorreo(e.target.value)} />
            </Form.Group>
    
            <Form.Group controlId="edad">
            <Form.Control type="number" placeholder='Edad del colaborador' value={edad} onChange={(e) => setEdad(e.target.value)}/>
            </Form.Group>
    
            <Form.Group controlId="cargo">
            <Form.Control type="text" placeholder='Cargo del colaborador' value={cargo} onChange={(e) => setCargo(e.target.value)} />
            </Form.Group>
    
            <Form.Group controlId="telefono">
            <Form.Control type="tel" placeholder='Teléfono del colaborador' value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
            </Form.Group>
    
            <Button style={{background: "#5200ff"}} className="btn btn-block w-100 pt-1 pb-1" type="submit">Agregar Colaborador</Button>
        </Form>
        );
    };
    
    export default Formulario;