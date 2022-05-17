import React, { useEffect, useState }  from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas() {

  const getLocalStorage = () => {
    let tarea = localStorage.getItem('Tareas');
    if (tarea) {
      return (tarea = JSON.parse(localStorage.getItem('Tareas')));
    } else {
      return [];
    }
  };
  
  const [tareas, setTareas] = useState(getLocalStorage());

  const agregarTarea = tarea => {
    if (tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };
  
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };
  
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas)
  };
  
  useEffect(() => {
     localStorage.setItem('Tareas', JSON.stringify(tareas))
   }, [tareas])
  
  return(
    <>
      <TareaFormulario onSubmit={agregarTarea} /> 
      <div className='tareas-lista-contenedor'>
      {
        tareas.map((tarea) => 
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
             />
        )
      }      
     </div>
    </>
  );
}

export default ListaDeTareas;