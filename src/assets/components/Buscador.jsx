const Buscador = ({colaboradores, setResultadoBusqueda}) => {
    const handleChange = (e) => {
        const busqueda = e.target.value.toLowerCase();
        console.log(busqueda)
        const resultados = colaboradores.filter((colaborador) => {
            return(
                colaborador.nombre.toLowerCase().includes(busqueda) ||
                colaborador.correo.toLowerCase().includes(busqueda) ||
                colaborador.edad.toString().includes(busqueda) ||
                colaborador.cargo.toLowerCase().includes(busqueda) ||
                colaborador.telefono.includes(busqueda)
            );
        }) 
        if (
            busqueda === ''
        ){
            setResultadoBusqueda(undefined)
            return
        }
        setResultadoBusqueda(resultados)
    };

    return (
        <div>
            <input className="form-control mb-3 mx-left" type="text" placeholder="Buscar un colaborador" onChange={handleChange}/>
        </div>
    );
};

export default Buscador;