import React from 'react';
import '../css/contador.css'

function Contador({numero_de_clics}){
    return(
        <div className='contador'>
            {numero_de_clics}
        </div>
    );
}

export default Contador; 