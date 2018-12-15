import React, { Component } from 'react';
// import {loadProductos, sendProduct} from "./ActionCreators"
import {connect} from "react-redux"
import './App.css';

class Mercaderia extends Component {

  componentWillMount(){
    this.props.loadProductos()
  }

  render() {
    return (
      <div className="App alert alert-primary">
        <ul className="Menu d-flex justify-content-center align-items-center">
          {
            this.props.productos.map((unProducto, i) => 
              <li key={i}>
                <div className="card border-success mb-3">
                  <div className="card-header">
                    {unProducto.descripcion}
                  </div>
                  <div className="card-body">
                    {unProducto.precio}
                  </div>
                  <div className="card-footer">
                  <h6><button className = "badge badge-pill btn btn-danger" 
                              onClick={() => this.props.enviarProducto(unProducto)}>Enviar</button></h6>
                  </div>
                </div>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // productos : state.productsQuick
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // enviarProducto : (unProducto) => {
    //   dispatch(sendProduct(unProducto))
    // }, 
    // loadProductos : () => { 
    //   dispatch(loadProductos())
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mercaderia);