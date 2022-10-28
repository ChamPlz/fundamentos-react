import './Input.css'
import React, { useState } from "react";

export default props =>{

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e){
        setValor(e.target.value)
    }

    return(
        <div>
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} type="text" onChange={quandoMudar}/>
                <input value={valor} readOnly/>
                <input value={undefined} readOnly/>
            </div>
        </div>
    )
}