import { useEffect,useState } from 'react'
import React from 'react'
import axios from 'axios'
import InputGroup from 'react-bootstrap/InputGroup';

function Reserva() {
    const [loaded, setLoaded] = useState(false)
    const [bloque, setBloque] = useState("")
    const [dia, setDia] = useState("")
    const [autorID, setAutorid] = useState("")
    const [motivo, setMotivo] = useState("")
    const [sala, setSala] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            if (!loaded) {
                try {
                    const result = await axios.post('http://localhost:5000/reservas/allReservas',{
                        bloque: bloque,
                        dia: dia,
                        autorID: autorID,
                        motivo: motivo,
                        sala: sala
                    })
                    console.log("Resultado del axios")
                    console.log(result)
                    setLoaded(true)
                } catch (error) {
                    console.log(error)
                }
            }
        }
        fetchData()
    })
    
    return(
        <div>
            <h3 className="center">Realice la resera</h3>

            
        </div>
    );
    
    
    
    

}

export default Reserva