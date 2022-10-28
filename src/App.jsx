import './App.css'
import React from "react";

import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from "./components/basic/Familia"
import FamiliaMembro from './components/basic/FamiliaMembro';
import Card from "./components/layout/Card";
import First from "./components/basic/First";
import ComParametro from "./components/basic/ComParamentro";
import Fragmento from "./components/basic/Fragmento";
import Aleatorio from "./components/basic/Aleatorio";

export default () => (
  <div className="App">
    <h1>Fundamentos do React</h1>

    <div className="Cards">
      <Card titulo="#12 - Contador" color="#424242">
        <Contador numeroInicial={10}></Contador>
      </Card>

      <Card titulo="#11 - Componente controlado (Inputs)" color="#E45F56">
        <Input></Input>
      </Card>

      <Card titulo="#10 - Comunicação indireta" color="#8BAD39">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Comunicação direta" color="#59323C">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Renderização condicional" color="#982395">
        <ParOuImpar numero={20}></ParOuImpar>
        <UsuarioInfo usuario={{nome: 'Fernando'}}/>
        <UsuarioInfo usuario={{}}/>
        <UsuarioInfo></UsuarioInfo>
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#7ab85a">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Repetição" color="#3ba45b">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Componentes com Filhos" color="#3da4ab">
        <Familia sobrenome="Caldeira">
            <FamiliaMembro nome="Carlos" />
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
          </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aletório" color="#FA6900">
        <Aleatorio num1={5} num2={40} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#2ab7ca">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Exercício com Parametro" color="#fed766">
        <ComParametro titulo="Situção do aluno" aluno="Pedro" nota={8.3} />
      </Card>

      <Card titulo="#01 - Primeiro componente" color="#651e3e">
        <First></First>
      </Card>
    </div>
  </div>
);
