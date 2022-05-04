import {useState, useEffect} from 'react'
import getInstrumentos from '../utils/getInstrumentos'
import {Instrumento} from './Instrumento'

export function Instrumentos(){
    const [instrumentos, setInstrumentos] = useState([])
    useEffect(() => {
        getInstrumentos()
        .then(setInstrumentos)
    },[])
    
    return(
        <div>
            {instrumentos.map(instrumento => (
                <Instrumento 
                key={instrumento.id} 
                id={instrumento.id}
                nombre={instrumento.nombre}
                imagen={instrumento.imagen}
                precio={instrumento.precio}
                cantidadVendida={instrumento.cantidadVendida}
                costoEnvio={instrumento.costoEnvio}
                />   
            ))}
        </div>
    )
} 