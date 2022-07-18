import { useEffect,useState } from 'react'
import React from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

function Horario213() {
    const [loaded, setLoaded] = useState(false)
    const [horario, setHorario] = useState({
        bloque1: {
            lunes: "libre",
            martes: "libre",
            miercoles: "libre",
            jueves: "libre",
            viernes: "libre",
            sabado: "libre",
            domingo: "libre"
        },
        bloque2: {
            lunes: "libre",
            martes: "libre",
            miercoles: "libre",
            jueves: "libre",
            viernes: "libre",
            sabado: "libre",
            domingo: "libre"
        },
        bloque3: {
            lunes: "libre",
            martes: "libre",
            miercoles: "libre",
            jueves: "libre",
            viernes: "libre",
            sabado: "libre",
            domingo: "libre"
        },
        bloque4: {
            lunes: "libre",
            martes: "libre",
            miercoles: "libre",
            jueves: "libre",
            viernes: "libre",
            sabado: "libre",
            domingo: "libre"
        },
        bloque5: {
            lunes: "libre",
            martes: "libre",
            miercoles: "libre",
            jueves: "libre",
            viernes: "libre",
            sabado: "libre",
            domingo: "libre"
        },
        bloque6: {
            lunes: "libre",
            martes: "libre",
            miercoles: "libre",
            jueves: "libre",
            viernes: "libre",
            sabado: "libre",
            domingo: "libre"
        },
        bloque7: {
            lunes: "libre",
            martes: "libre",
            miercoles: "libre",
            jueves: "libre",
            viernes: "libre",
            sabado: "libre",
            domingo: "libre"
        }
    })
    useEffect(() => {
        const fetchData = async () => {
            if (!loaded) {
                try {
                    const result = await axios.get('http://localhost:5000/reservas/allReservas')
                    console.log("Resultado del axios")
                    console.log(result)
                    setHorario(distribucionReservas(result.data.reservas))
                    console.log(horario)
                    setLoaded(true)
                } catch (error) {
                    console.log(error)
                }
            }
        }
        fetchData()
    })
    
    return (
        <Table striped bordered hover>
            {console.log(horario)}
            <thead>
                <tr>
                    <th>Bloque</th>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miercoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                    <th>Sabado</th>
                    <th>Domingo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1-2</td>
                    {/* Mostrar reservas filas bloque1*/}
                    <td>{horario.bloque1.lunes}</td>
                    <td>{horario.bloque1.martes}</td>
                    <td>{horario.bloque1.miercoles}</td>
                    <td>{horario.bloque1.jueves}</td>
                    <td>{horario.bloque1.viernes}</td>
                    <td>{horario.bloque1.sabado}</td>
                    <td>{horario.bloque1.domingo}</td>
                </tr>
                <tr>
                    <td>3-4</td>
                    {/* Mostrar reservas filas bloque2*/}
                    <td>{horario.bloque2.lunes}</td>
                    <td>{horario.bloque2.martes}</td>
                    <td>{horario.bloque2.miercoles}</td>
                    <td>{horario.bloque2.jueves}</td>
                    <td>{horario.bloque2.viernes}</td>
                    <td>{horario.bloque2.sabado}</td>
                    <td>{horario.bloque2.domingo}</td>
                </tr>
                <tr>
                    <td>5-6</td>
                    {/* Mostrar reservas filas bloque3*/}
                    <td>{horario.bloque3.lunes}</td>
                    <td>{horario.bloque3.martes}</td>
                    <td>{horario.bloque3.miercoles}</td>
                    <td>{horario.bloque3.jueves}</td>
                    <td>{horario.bloque3.viernes}</td>
                    <td>{horario.bloque3.sabado}</td>
                    <td>{horario.bloque3.domingo}</td>
                </tr>
                <tr>
                    <td>7-8</td>
                    {/* Mostrar reservas filas bloque4*/}
                    <td>{horario.bloque4.lunes}</td>
                    <td>{horario.bloque4.martes}</td>
                    <td>{horario.bloque4.miercoles}</td>
                    <td>{horario.bloque4.jueves}</td>
                    <td>{horario.bloque4.viernes}</td>
                    <td>{horario.bloque4.sabado}</td>
                    <td>{horario.bloque4.domingo}</td>
                </tr>
                <tr>
                    <td>9-10</td>
                    {/* Mostrar reservas filas bloque5*/}
                    <td>{horario.bloque5.lunes}</td>
                    <td>{horario.bloque5.martes}</td>
                    <td>{horario.bloque5.miercoles}</td>
                    <td>{horario.bloque5.jueves}</td>
                    <td>{horario.bloque5.viernes}</td>
                    <td>{horario.bloque5.sabado}</td>
                    <td>{horario.bloque5.domingo}</td>
                </tr>
                <tr>
                    <td>11-12</td>
                    {/* Mostrar reservas filas bloque6*/}
                    <td>{horario.bloque6.lunes}</td>
                    <td>{horario.bloque6.martes}</td>
                    <td>{horario.bloque6.miercoles}</td>
                    <td>{horario.bloque6.jueves}</td>
                    <td>{horario.bloque6.viernes}</td>
                    <td>{horario.bloque6.sabado}</td>
                    <td>{horario.bloque6.domingo}</td>
                </tr>
                <tr>
                    <td>13-14</td>
                    {/* Mostrar reservas filas bloque7*/}
                    <td>{horario.bloque7.lunes}</td>
                    <td>{horario.bloque7.martes}</td>
                    <td>{horario.bloque7.miercoles}</td>
                    <td>{horario.bloque7.jueves}</td>
                    <td>{horario.bloque7.viernes}</td>
                    <td>{horario.bloque7.sabado}</td>
                    <td>{horario.bloque7.domingo}</td>
                </tr>
            </tbody>
        </Table>
    );

}
function distribucionReservas (Reserva) {
    let temp = {
        bloque1: {
            lunes: "libre",
            martes: "libre",
            miercoles: "libre",
            jueves: "libre",
            viernes: "libre",
            sabado: "libre",
            domingo: "libre"
        },
        bloque2: {
            lunes: "libre",
            martes: "libre",
            miercoles: "libre",
            jueves: "libre",
            viernes: "libre",
            sabado: "libre",
            domingo: "libre"
        },
        bloque3: {
            lunes: "libre",
            martes: "libre",
            miercoles: "libre",
            jueves: "libre",
            viernes: "libre",
            sabado: "libre",
            domingo: "libre"
        },
        bloque4: {
            lunes: "libre",
            martes: "libre",
            miercoles: "libre",
            jueves: "libre",
            viernes: "libre",
            sabado: "libre",
            domingo: "libre"
        },
        bloque5: {
            lunes: "libre",
            martes: "libre",
            miercoles: "libre",
            jueves: "libre",
            viernes: "libre",
            sabado: "libre",
            domingo: "libre"
        },
        bloque6: {
            lunes: "libre",
            martes: "libre",
            miercoles: "libre",
            jueves: "libre",
            viernes: "libre",
            sabado: "libre",
            domingo: "libre"
        },
        bloque7: {
            lunes: "libre",
            martes: "libre",
            miercoles: "libre",
            jueves: "libre",
            viernes: "libre",
            sabado: "libre",
            domingo: "libre"
        }
    }
    
    Reserva.map((reserva, index)=>{
        if(reserva.sala === "213"){
            if (reserva.bloque === "1-2") {
                switch (reserva.dia){
                    case "lunes":
                        temp.bloque1.lunes = reserva.motivo
                        break
                    case "martes":
                        temp.bloque1.martes = reserva.motivo
                        break
                    case "miercoles":
                        temp.bloque1.miercoles = reserva.motivo
                        break
                    case "jueves":
                        temp.bloque1.jueves = reserva.motivo
                        break
                    case "viernes":
                        temp.bloque1.viernes = reserva.motivo
                        break
                    case "sabado":
                        temp.bloque1.sabado = reserva.motivo
                        break
                    case "domingo":
                        temp.bloque1.domingo = reserva.motivo
                        break
                    default:
                        break
                }
            } else if (reserva.bloque === "3-4") {
                switch (reserva.dia){
                    case "lunes":
                        temp.bloque2.lunes = reserva.motivo
                        break
                    case "martes":
                        temp.bloque2.martes = reserva.motivo
                        break
                    case "miercoles":
                        temp.bloque2.miercoles = reserva.motivo
                        break
                    case "jueves":
                        temp.bloque2.jueves = reserva.motivo
                        break
                    case "viernes":
                        temp.bloque2.viernes = reserva.motivo
                        break
                    case "sabado":
                        temp.bloque2.sabado = reserva.motivo
                        break
                    case "domingo":
                        temp.bloque2.domingo = reserva.motivo
                        break
                    default:
                        break
                }
            } else if (reserva.bloque === "5-6") {
                switch (reserva.dia){
                    case "lunes":
                        temp.bloque3.lunes = reserva.motivo
                        break
                    case "martes":
                        temp.bloque3.martes = reserva.motivo
                        break
                    case "miercoles":
                        temp.bloque3.miercoles = reserva.motivo
                        break
                    case "jueves":
                        temp.bloque3.jueves = reserva.motivo
                        break
                    case "viernes":
                        temp.bloque3.viernes = reserva.motivo
                        break
                    case "sabado":
                        temp.bloque3.sabado = reserva.motivo
                        break
                    case "domingo":
                        temp.bloque3.domingo = reserva.motivo
                        break
                    default:
                        break
                }
            } else if (reserva.bloque === "7-8") {
                switch (reserva.dia){
                    case "lunes":
                        temp.bloque4.lunes = reserva.motivo
                        break
                    case "martes":
                        temp.bloque4.martes = reserva.motivo
                        break
                    case "miercoles":
                        temp.bloque4.miercoles = reserva.motivo
                        break
                    case "jueves":
                        temp.bloque4.jueves = reserva.motivo
                        break
                    case "viernes":
                        temp.bloque4.viernes = reserva.motivo
                        break
                    case "sabado":
                        temp.bloque4.sabado = reserva.motivo
                        break
                    case "domingo":
                        temp.bloque4.domingo = reserva.motivo
                        break
                    default:
                        break
                }
            } else if (reserva.bloque === "9-10") {
                switch (reserva.dia){
                    case "lunes":
                        temp.bloque5.lunes = reserva.motivo
                        break
                    case "martes":
                        temp.bloque5.martes = reserva.motivo
                        break
                    case "miercoles":
                        temp.bloque5.miercoles = reserva.motivo
                        break
                    case "jueves":
                        temp.bloque5.jueves = reserva.motivo
                        break
                    case "viernes":
                        temp.bloque5.viernes = reserva.motivo
                        break
                    case "sabado":
                        temp.bloque5.sabado = reserva.motivo
                        break
                    case "domingo":
                        temp.bloque5.domingo = reserva.motivo
                        break
                    default:
                        break
                }
            } else if (reserva.bloque === "11-12") {
                switch (reserva.dia){
                    case "lunes":
                        temp.bloque6.lunes = reserva.motivo
                        break
                    case "martes":
                        temp.bloque6.martes = reserva.motivo
                        break
                    case "miercoles":
                        temp.bloque6.miercoles = reserva.motivo
                        break
                    case "jueves":
                        temp.bloque6.jueves = reserva.motivo
                        break
                    case "viernes":
                        temp.bloque6.viernes = reserva.motivo
                        break
                    case "sabado":
                        temp.bloque6.sabado = reserva.motivo
                        break
                    case "domingo":
                        temp.bloque6.domingo = reserva.motivo
                        break
                    default:
                        break
                }
            } else if (reserva.bloque === "9-10") {
                switch (reserva.dia){
                    case "lunes":
                        temp.bloque7.lunes = reserva.motivo
                        break
                    case "martes":
                        temp.bloque7.martes = reserva.motivo
                        break
                    case "miercoles":
                        temp.bloque7.miercoles = reserva.motivo
                        break
                    case "jueves":
                        temp.bloque7.jueves = reserva.motivo
                        break
                    case "viernes":
                        temp.bloque7.viernes = reserva.motivo
                        break
                    case "sabado":
                        temp.bloque7.sabado = reserva.motivo
                        break
                    case "domingo":
                        temp.bloque7.domingo = reserva.motivo
                        break
                    default:
                        break
                }
            }
            return "listo"
        }
           
    })
    return temp
}
export default Horario213;