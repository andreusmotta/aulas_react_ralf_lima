import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Componente01(props) {
  return (
    <h2>Olá, {props.nome}</h2>
  )
}

const Componente02 = (props) => {
  return (
    <h2>Olá, {props.nome}</h2>
  )
}

const Componente03 = (props) => {
  return (
    <div>
      <h2>Props com mais dados, tipo JSON:</h2>
      <p>{props.informacoes.nome}</p>
      <p>{props.informacoes.idade}</p>
    </div>
  )
}

var dados = {nome:"Beltrano", idade:28};

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Props</h1>
      <Componente01 nome="Fulano no componente01" />
      <Componente02 nome="Siclano no componente02" />
      <Componente03 informacoes={dados} />
    </div>
  )
}

export default App
