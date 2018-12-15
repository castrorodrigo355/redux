import React, { Component } from 'react';
// import Mercaderia from './Mercaderia'
// import CarritoDeCompras from './CarritoDeCompras'
import Formulario from './Formulario'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Formulario/>
        {/* <Mercaderia/>
        <CarritoDeCompras/> */}
      </div>
    );
  }
}
export default App;