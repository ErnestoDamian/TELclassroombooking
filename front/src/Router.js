import React,{Component} from "react";
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./components/Login";

class Router extends Component{
  render(){
    return(
      
      <BrowserRouter>
        {/*Configuracion de rutas */}
        <Routes>
          <Route path="/Login" element = {<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router