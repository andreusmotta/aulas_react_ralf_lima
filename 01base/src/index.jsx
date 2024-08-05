// Importar módulos
import React from "react";
// import ReactDOM from 'react-dom // esse é o jeito deprecatado.
import ReactDOM from 'react-dom/client';

// const estrutura = 
//     <div>
//         <h1>Olá mundo dentro de uma variável.</h1>
//         <p>Parágrafo simples.</p>
//     </div>

// Renderizador:
// ReactDOM.render(
//     <h1>Meu primeiro render</h1>, // Não precisa colocar dentro direto, pode colocar dentro de uma variável:
//     Estrutura,
//     document.getElementById('root')
// )

// ----------------------------

// o ReactDOM.render acima tá deprecatado, o jeito novo é assim:
// import React from 'react' // Já tá importada lá em cima
// import ReactDOM from 'react-dom/client' // Já tá importada lá em cima

function Estrutura() {
    return (
        <div>
        <h1>Olá mundo dentro de uma função.</h1>
        <p>Parágrafo simples.</p>
        </div>
    )
}    

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <h1>Olá mundo</h1> Pode colocar assim também, não precisa colocar a função */}
    {/* Colocando assim é o jeito atual de fazer, como se carregasse o componente: */}
    <Estrutura />
  </React.StrictMode>,
)