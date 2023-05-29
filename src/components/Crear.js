import { useState } from "react";
import {GuardarEnStorage} from "../helpers/GuardarEnStorage";

const Crear = ({setListadoState}) => {
    
    const [peliState, setPeliState] = useState({
        titulo: "",
        descripcion: ""
    });

    //desestrucutrar el objeto
    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = (e) => {
        e.preventDefault();


        //conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo, 
            descripcion
        }

        //guardar estado
        setPeliState(peli);

        //actualizamos el state del listado principal
        setListadoState(elementos => {
            return [ ...elementos, peli]
        });

        //guardar en el almacenamiento local
        GuardarEnStorage("pelis", peli)

    }

    
    
    return (
        <div className="add">
            <h3 className="title">Añadir Pelicula:</h3>

            <strong>
                {(titulo && descripcion) && "Has creado la pelicula: "+ titulo}
            </strong>

            <form onSubmit={conseguirDatosForm}>
                <input type="text" id='titulo' name="titulo" placeholder="Titulo" />
                <textarea id='descripcion' name='descripcion' placeholder="Descripcion"></textarea>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Crear