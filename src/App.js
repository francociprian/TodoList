import './App.css';
import logo from './imagenes/todoList.png';
import ListaDeTareas from './componentes/ListaDeTareas';
// import { AiOutlineCloseCircle } from "react-icons/ai";


function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img 
          src={ logo }
          className='logo' 
          alt='Logo'/>
      </div>
      <div className='tareas-lista'>
        <div className='tareas-lista-bar'>
          <h1>My Tasks</h1>
        </div>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
