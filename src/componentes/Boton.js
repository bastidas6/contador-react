import React from 'react';
import '../css/boton.css';

function Boton ({texto, es_boton_de_clic, manejar_clic}){
    return(
        <button 
        className={es_boton_de_clic ? "boton_clic" : "boton_reiniciar"}
        onClick={manejar_clic}>
            {texto}
        </button>
    ) 
}

export default Boton;