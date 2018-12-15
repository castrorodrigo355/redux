import React, { Component } from 'react';
import { 
    // obtenerNombre, 
    funcPalabra ,
    registrase
    } from "./ActionCreators"
import {connect} from "react-redux"
import './App.css';

class Formulario extends Component {

    // componentWillMount(){
    //     this.props.obtenerNombre()
    // }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       nombre: '', 
    //       dni: '', 
    //       curso : '',
    //     }
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const alumno = {
    //       name : this.state.nombre,
    //       number : this.state.dni,
    //       course : this.state.curso,
    //       flag : false
    //     }
    //     this.setState({
    //         nombre: '',
    //         dni: '',
    //         curso : ''
    //     });
    //     this.refs.inputNombre.focus();
    //     this.props.onAgregarAlumno(alumno)
    // }
    
    // handleInputChange(e) {
    //     const {value, name} = e.target;
    //     console.log(value, name);
    //     this.setState({
    //       [name]: value
    //     });
    // }

    // componentWillMount(){
    //     this.props.obtenerNombre()
    // }

    render() {
        return (
            <div className="container">
                <div className="card border m-2 bg-transparent">
                    <div className="card-body">
                        <form style={{textAlign:"center"}} onSubmit={() => this.props.registrase(this.props.store)}>
                            <div className="form-group">
                                <h4><span className="badge badge-pill badge-info">Ingresar</span></h4>
                            </div>
                            <div className="form-group">
                                    <input type="text" name="nombre" className="form-control bg-transparent" placeholder="Nombre..."
                                        onChange={(e) => this.props.funcPalabra(e)} 
                                        value={this.props.nombre}/>
                            </div>
                            <div className="form-group">
                                    <input type="text" name="dni" className="form-control bg-transparent" placeholder="Dni..."
                                        onChange={(e) => this.props.funcPalabra(e)} 
                                        value={this.props.dni}/>
                            </div>
                            <div className="form-group">
                                    <input type="text" name="curso" className="form-control bg-transparent" placeholder="Curso..."
                                        onChange={(e) => this.props.funcPalabra(e)} 
                                        value={this.props.curso}/>
                            </div>
                            
                            <button type="submit" className="badge badge-pill badge-info">OK</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        store : state
    }
}
  
  const mapDispatchToProps = dispatch => {
    return {
        // obtenerNombre : () => {
        //     dispatch(obtenerNombre())
        // }, 
        funcPalabra : (e) => { 
            dispatch(funcPalabra(e))
        },
        registrase : (user) => {
            dispatch(registrase(user))
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Formulario);