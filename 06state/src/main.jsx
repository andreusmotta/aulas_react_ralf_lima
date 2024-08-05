import React from 'react'
import ReactDOM, { render } from 'react-dom'

class Componente01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nome:'Fulano'};
  }
  render() {
    return <h1>{this.state.nome}</h1>
  }
}

ReactDOM.render(<Componente01 />, document.getElementById('root'));