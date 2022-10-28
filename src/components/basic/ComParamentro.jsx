import React from "react";

export default function ComParametro(props) {
  const status = props.nota >= 7 ? "aprovado" : "reprovado";
  const notaint = Math.ceil(props.nota);
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        <strong>{props.aluno} </strong>
        tem nota
        <strong> {notaint} </strong>e está
        <strong> {status}</strong>
      </p>
    </div>
  );
}
