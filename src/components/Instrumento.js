import { Link } from "react-router-dom";
import styles from '../styles/instrumento.module.css'
const {container, instrumentoName, envioGratis, envioPago, vendidos, margen, link} = styles

export function Instrumento({id, instrumento, imagen, precio, cantidadVendida, costoEnvio}){
    return(
        <div className={margen}>
                <Link to={`/producto/${id}`} className={link}>
        <div className={container}>
            <section>
                <img src={require(`../images/${imagen}`)} alt={instrumento}/>
            </section>
            <section>
                <h2 className={instrumentoName}>{instrumento}</h2>
                <h1>$ {precio}</h1>
                {costoEnvio === 'G' 
                ? <h4 className={envioGratis}><img src={require(`../images/camion.png`)} alt='camion'/>Envío gratis a todo el país</h4>
                : <h4 className={envioPago}>Costo de envío al interior de Argentina: ${costoEnvio}</h4>
            }
                <h4 className={vendidos}>{cantidadVendida} vendidos</h4>
            </section>
        </div>
            </Link>
        </div>
    )
}