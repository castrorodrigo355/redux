import React, { Component } from 'react';
// import {removeProduct} from "./ActionCreators"
import {connect} from "react-redux"
import './App.css';

class CarritoDeCompras extends Component {

  render() {
    return (
      <div className="App alert alert-danger" style={{height:"30vh"}}>
        <ul className="Menu d-flex justify-content-center align-items-center">
          {
            this.props.carrito.map((unProducto, i) => 
              <li key={i}>
                <div className="card border-success mb-3">
                  <div className="card-header bg-transparent border-success">
                    {unProducto.descripcion}
                  </div>
                  <div className="card-body">
                    {unProducto.precio}
                  </div>
                  <div className="card-footer">
                    <button type="submit" onClick={() => this.props.eliminarProducto(unProducto)}>X</button>
                  </div>
                </div>
              </li>
            )
          }
        </ul>
        {this.props.carrito.reduce((acum, x) => acum + x.precio, 0)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // carrito : state.carritoStore
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // eliminarProducto(unProducto){
    //   dispatch(removeProduct(unProducto))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarritoDeCompras);