import React from "react";
import ReactDOM from "react-dom";

class MeuComponente extends React.Component {
    render() {
        return <h1>Meu primeiro componente</h1>;        
    }
}

ReactDOM.render(
    <MeuComponente />,
    document.getElementById('root')
);