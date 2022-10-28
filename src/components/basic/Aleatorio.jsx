import React from "react"

export default function Aleatorio(props){

    const {num1, num2} = props;

    const numA = Math.floor(Math.random() * (num1 - num2 + 1)) + num2
    return(
        <div>
            <h2>Número aletorio entre { num1 } e { num2 }:</h2>
            <p>{numA}</p>
        </div>
    )
}