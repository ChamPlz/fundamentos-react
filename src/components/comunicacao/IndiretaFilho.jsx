import React from "react";


export default props =>{
    const cb = props.quandoClicar
    const gerarIdade = () => Math.floor(Math.random() * (21) + 50) 
    const gerarNerd = () => Math.random() > 0.5
    return(
        <div>
            <div>Filho</div>
            <button onClick={_ => cb('João', gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}