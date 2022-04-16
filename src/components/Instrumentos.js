import json from '../data/instrumentos.json'
import {Instrumento} from './Instrumento'
export function Instrumentos(){
    
    const {instrumentos} = json

    return(
        <div>
            {instrumentos.map(instrumento => (
                <Instrumento 
                key={instrumento.id} 
                id={instrumento.id}
                instrumento={instrumento.instrumento}
                imagen={instrumento.imagen}
                precio={instrumento.precio}
                cantidadVendida={instrumento.cantidadVendida}
                costoEnvio={instrumento.costoEnvio}
                />   
            ))}
        </div>
    )
}