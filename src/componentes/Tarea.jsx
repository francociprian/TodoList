import React from 'react';
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";


function Tarea ({ id, texto, completada, completarTarea, eliminarTarea }) {
  return(
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        >
        {texto}
      </div>
      <div
        onClick={() => completarTarea(id)}>
        <AiOutlineCheckCircle className={completada ? 'tarea-check completada': 'tarea-check'}/>
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        < AiOutlineCloseCircle className='tarea-delete' />
      </div>
    </div>    
  );
}

export default Tarea;