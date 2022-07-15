import React,{Component} from "react";
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./components/Login";
import Horario215 from "./components/Horario215";
import Horario213 from "./components/Horario213";
import Reserva from "./components/Reserva";

class Router extends Component{
  render(){
    return(
      <BrowserRouter>
        {/*Configuracion de rutas */}
        <Routes>
          <Route path="/Login" element = {<Login />} />
          <Route path="/215" element = {<Horario215 />} />
          <Route path="/213" element = {<Horario213 />} />
          <Route path="/Reserva" element = {<Reserva />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router