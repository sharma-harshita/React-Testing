import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/App"
import {BrowserRouter} from 'react-router-dom'
// import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css";

ReactDOM.render( 
        < BrowserRouter >
            <App/>
        </BrowserRouter>, document.getElementById('root'))

//we put these angular brackets to create instance of that component
//we do not have to write .js while importing the file , it assumes that you are importing.js file only