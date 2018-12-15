import axios from "axios"

// const loadProductos = () => {
//     return (dispatch) => {
//         axios.get("http://localhost:3000/productos")
//             .then(response => dispatch({
//                 type: "GET_PRODUCTS",
//                 productsQuick : response.data
//             })
//     )}
// }

const funcPalabra = e => {
    return {
        type: "ADD_LETRA",
        letras: e
    }
}

// const obtenerNombre = () => {
//     return {
//         type: "GET_NOMBRE",
//         nombre: ""
//     }
// }

const registrase = (user) => {
    return (dispatch) => {
        axios.post("http://localhost:3000/usuarios", user)
            .then(response => dispatch({
                type: "POST_REGISTRARSE",
                resultado : ""
            })
    )}
}

export { 
    // obtenerNombre, 
    funcPalabra, 
    registrase
}