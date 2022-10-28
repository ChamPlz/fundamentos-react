import "./TabelaProdutos.css";
import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
  const produtosLI = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
        <td>{produto.id})</td>
        <td>{produto.produto}</td>
        <td>R${produto.preco}</td>
      </tr>
    );
  });
  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{produtosLI}</tbody>
      </table>
    </div>
  );
};
