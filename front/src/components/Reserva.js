import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import Select from 'react-select';

const optionsdia = [
    { value: 'lunes', label: 'Lunes' },
    { value: 'martes', label: 'Martes' },
    { value: 'miercoles', label: 'Miercoles' },
    { value: 'jueves', label: 'Jueves' },
    { value: 'viernes', label: 'Viernes' },
    { value: 'sabado', label: 'Sabado' },
    { value: 'domingo', label: 'Domingo' },
]

function Reserva() {
    const [loaded, setLoaded] = useState(false)
    const [bloque, setBloque] = useState('')
    const [dia, setDia] = useState('')
    const [motivo, setMotivo] = useState('')
    const [sala, setSala] = useState('')

    function handleChangeBloque(e) {
        setBloque(e.value)
    }
    function handleChangeDia(e) {
        setDia(e.value)
    }
    function handleChangeMotivo(e) {
        setMotivo(e.value)
    }
    function handleChangeSala(e) {
        setSala(e.value)
    }
    function handleclick(){
        const fetchData = async () => {
            if (!loaded) {
                try {
                    const result = await axios.post('http://localhost:5000/reservas/agregar_reserva', {
                        bloque: bloque,
                        dia: dia,
                        autorID: '62918efcb3a41586c6992cc8',
                        motivo: motivo,
                        sala: sala
                    })
                    console.log('Resultado del axios')
                    console.log(result)
                    setLoaded(true)
                } catch (error) {
                    console.log(error)
                }
            }
        }
        fetchData()
    }
    return (
        <div>
            <h3 className='center'>Realice la resera</h3>
            <div className='Contenedor-Formulario'>
                <Select
                    options={optionsdia}
                    defaultValue={{ label: 'Seleccione el dia' }}
                    className='dia'
                    onChange={handleChangeDia}
                />
                <br />
                <Select
                    defaultValue={{ label: 'Seleccione el Bloque' }}
                    options={[
                        { value: '1-2', Label: 'Bloque 1-2' },
                        { value: '3-4', Label: 'Bloque 3-4' },
                        { value: '5-6', Label: 'Bloque 5-6' },
                        { value: '7-8', Label: 'Bloque 7-8' },
                        { value: '9-10', Label: 'Bloque 9-10' },
                        { value: '11-12', Label: 'Bloque 11-12' },
                        { value: '13-14', Label: 'Bloque 13-14' }
                    ]}
                    onChange={handleChangeBloque}
                />
                <br />
                <Select
                    defaultValue={{ label: 'Seleccione la sala' }}
                    aria-label='Default select example'
                    options={[{ value: '215', label: 'Sala B215' }, { value: '213', label: 'Sala B213' }]}
                    onChange={handleChangeSala}
                />
                <br />
                <Select
                    defaultValue={{ label: 'Seleccione el motivo' }}
                    aria-label='Default select example'
                    options={[{ value: 'clases', label: 'Clases' }, { value: 'Actividades', label: 'Actividades extras' }]}
                    onChange={handleChangeMotivo}
                />
                <br />
                <button onClick={handleclick} href='/215'>
                    Activate Lasers
                </button>
            </div>
        </div>
    );





}

export default Reserva