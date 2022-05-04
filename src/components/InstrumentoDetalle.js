import {useState, useEffect} from 'react'
import getOneInstrumento from '../utils/getOneInstrumento'
import {useParams} from 'react-router-dom'
import styles from '../styles/instrumentoDetalle.module.css'
const {container, descripcion, vendidos, section, price, name, envioGratis, envioPago, boton} = styles

export function InstrumentoDetalle(){
    const {id} = useParams()
    const [instrumento, setInstrumento] = useState({})
    useEffect(() => {
        getOneInstrumento(id)
        .then(setInstrumento)
    },[id])
    
    
    return(
        <div className={container}>
            <section>
                <img src={instrumento.imagen} alt={instrumento.nombre} width={300}/>
                <p>Descripcion:</p>
                <p className={descripcion}>{instrumento.descripcion}</p>
            </section>        
            <section className={section}>
                <p className={vendidos}>{instrumento.cantidadVendida} vendidos</p>
                <h3 className={name}>{instrumento.nombre}</h3>
                <h2 className={price}>$ {instrumento.precio}</h2>
                <h5>Marca: {instrumento.marca}</h5>
                <h5>Modelo: {instrumento.modelo}</h5>
                <p>Costo del envío:</p>
                {instrumento.costoEnvio === 0 
                ? <p className={envioGratis}><img src={require(`../images/camion.png`)} alt='camion'/>Envío gratis a todo el país</p>
                : <p className={envioPago}>Costo de envío al interior de Argentina: ${instrumento.costoEnvio}</p>
                }
                <button className={boton}>Agregar al carrito</button>
            </section>
        </div>
    )
}