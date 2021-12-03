//Se importa CSS
import "./style.css"

// Se importa React y ReactDOM
import React from "react"
import ReactDOM from "react-dom"
//Se importa libreria de react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";

// // Se renderiza 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);