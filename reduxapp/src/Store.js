import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"

const reducer = (state, action) => {
    if(action.type === "ADD_LETRA"){
        return{
            ...state, [action.letras.target.name] : action.letras.target.value
        }
    } else if(action.type === "POST_REGISTRARSE"){
        return {
            ...state, nombre: "",
            ...state, dni: "",
            ...state, curso: "",
            ...state, resultado: action.resultado
        }

    // } else if(action.type === "REMOVE_PRODUCT"){
    //     return {
    //         ...state, carritoStore: state.carritoStore.filter(product => {
    //             return product.id !== action.producto.id
    //         })
    //     }
    // }
    }
    return state
}
const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}
export default createStore(reducer, {
        // carritoStore:[], 
        // productsQuick: [], 
        nombre: "", 
        dni: "", 
        curso: ""
    }, 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger, thunk))