import { Table } from "react-bootstrap";
import BaseColaboradores from "../../BaseColaboradores";

function Listado() {
    return (
        <Table>
        <thead striped bordered hover size="sm">
            <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Edad</th>
                <th>Cargo</th>
                <th>Telefono</th>
            </tr>
        </thead>
        <tbody>
        {BaseColaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
                <td>{colaborador.nombre} </td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
            </tr>
            ))}
        </tbody>
        </Table>
    );
}

export default Listado;