import {useParams} from 'react-router-dom'
import json from '../data/instrumentos.json'
import styles from '../styles/instrumentoDetalle.module.css'
const {container, descripcion, vendidos, section, price, name, envioGratis, envioPago, boton} = styles

export function InstrumentoDetalle(){
    const {id} = useParams()
    const {instrumentos} = json
    const instr = instrumentos.find(instrumento => instrumento.id === id)
    
    return(
        <div className={container}>
            <section>
                <img src={require(`../images/${instr.imagen}`)} alt={instr.instrumento} width={300}/>
                <p>Descripcion:</p>
                <p className={descripcion}>{instr.descripcion}</p>
            </section>        
            <section className={section}>
                <p className={vendidos}>{instr.cantidadVendida} vendidos</p>
                <h3 className={name}>{instr.instrumento}</h3>
                <h2 className={price}>$ {instr.precio}</h2>
                <h5>Marca: {instr.marca}</h5>
                <h5>Modelo: {instr.modelo}</h5>
                <p>Costo del envío:</p>
                {instr.costoEnvio === 'G' 
                ? <p className={envioGratis}><img src={require(`../images/camion.png`)} alt='camion'/>Envío gratis a todo el país</p>
                : <p className={envioPago}>Costo de envío al interior de Argentina: ${instr.costoEnvio}</p>
                }
                <button className={boton}>Agregar al carrito</button>
            </section>
        </div>
    )
}