import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';
import { MdAddCircleOutline } from "react-icons/md";

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleShipping = e => {
    e.preventDefault();
    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    props.onSubmit(tareaNueva);

    e.target.reset() // resetear manejarEnvio despues de mandar algo!
    setInput('')
  };

  return (
    <form 
      className='tarea-formulario'
      onSubmit={handleShipping}>
      <input
        autoFocus
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={handleChange}
      />
      <button className='tarea-boton'>
        <MdAddCircleOutline/>
      </button>
    </form>
  );
}

export default TareaFormulario;