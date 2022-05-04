import { Link } from "react-router-dom";

import styles from '../styles/instrumento.module.css'
const {container, instrumentoName, envioGratis, envioPago, vendidos,link} = styles

export function Instrumento({id, nombre, imagen, precio, cantidadVendida, costoEnvio, quitarLink}){

    const linkProp = quitarLink ? {'pointerEvents' : 'none'}
                                : {'pointerEvents' : 'all'}
    return(
        <Link to={`/producto/${id}`} className={link} style={linkProp}>
        <div className={container}>
            <section>
                <img src={imagen} alt={nombre} width={150}/>
            </section>
            <section>
                <h2 className={instrumentoName}>{nombre}</h2>
                <h1>$ {precio}</h1>
                {costoEnvio === 0 
                ? <h4 className={envioGratis}><img src={require(`../images/camion.png`)} alt='camion'/>Envío gratis a todo el país</h4>
                : <h4 className={envioPago}>Costo de envío al interior de Argentina: ${costoEnvio}</h4>
            }
                <h4 className={vendidos}>{cantidadVendida} vendidos</h4>
            </section>
        </div>
        </Link>
    )
}