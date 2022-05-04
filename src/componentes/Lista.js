import React, {useState, Fragment} from 'react';
import Avatar from './Avatar'

const Lista = () => {

    const [listaNumeros , setLista] = useState([1, 2]);
    const [newElement , setNewElement] = useState(3);

    const agregar = ()=> {
        if(newElement > 99){
            setNewElement(99);
        }else{
            setLista([...listaNumeros, newElement]);
            setNewElement(newElement + 1);
        }


    }

    const quitar = ()=> {
        listaNumeros.pop();
        setLista([...listaNumeros]);
        setNewElement(newElement - 1);
        if(newElement < 0){
            setNewElement(0);
        }

    }

    return ( 
        <Fragment>
            <div className='header'>
                <h1>Ejemplo de los avatars</h1>
                <button onClick={agregar}>Agregar</button>
                <button onClick={quitar}>Quitar</button>
            </div>
            <hr/>
            <div className='avatar-container'>
                {listaNumeros.map( item =>  <Avatar id={item} />) }
            </div>

        </Fragment>
        
     );
}
 
export default Lista;