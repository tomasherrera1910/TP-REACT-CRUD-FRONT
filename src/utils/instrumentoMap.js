import { Instrumento } from "../components/Instrumento"

import styles from '../styles/crud.module.css'
const {editButton, deleteButton, container} = styles

export default function InstrumentoCRUDMap({instrumentos, editHandler, deleteInstrumento}){
    return(
        <>
        {
         instrumentos?.map(instrumento => (
                <div className={container} key={instrumento.id}>
                <Instrumento 
                id={instrumento.id}
                nombre={instrumento.nombre}
                imagen={instrumento.imagen}
                precio={instrumento.precio}
                cantidadVendida={instrumento.cantidadVendida}
                costoEnvio={instrumento.costoEnvio}
                quitarLink={true}
                />
                <section>
                <button className={editButton} onClick={() => editHandler(instrumento.id)}>EDITAR</button>
                <button className={deleteButton} onClick={() => deleteInstrumento(instrumento.id)}>ELIMINAR</button>
                </section>
                </div>
            ))
        }
        </>
    )
}