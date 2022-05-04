import {useState, useEffect} from 'react'

import styles from '../styles/modal.module.css'
import { getImgBase64 } from '../utils/getImgBase64'
import editInstrumentoForm from '../utils/editInstrumentoForm'
import postInstrumento from '../utils/postInstrumento'
import editInstrumento from '../utils/editInstrumento'
const {inputStyle, container, closeButton, formStyles, submitButton, titleStyles} = styles

export function Modal({modal, setModal, edit, setEdit}){
    const[data,setData] = useState(null)
    const botonNombre = edit ? 'EDITAR INSTRUMENTO'
                             : 'NUEVO INSTRUMENTO'
    const modalHandler = () => {
    setModal(false)
    setData(null)
    }
    useEffect(() => {
        if(data && !edit) {
            postInstrumento(data)
            setData(null)
        }    
        else if(data && edit) {
            editInstrumento(data, edit.id) 
            setEdit(null)
            setData(null)
        }    
        else if(edit) editInstrumentoForm(edit)
    },[data, edit, setEdit])

    const handlerSubmit = async(evt) => {
        evt.preventDefault()
        const img = evt.target.imagen.files[0] ? await getImgBase64()
                                               : null
        setData({
            nombre: document.getElementById('nombre').value,
            marca: document.getElementById('marca').value,
            modelo: document.getElementById('modelo').value,
            imagen: img || edit.imagen,
            precio: document.getElementById('precio').value,
            costoEnvio: document.getElementById('costoEnvio').value,
            cantidadVendida: document.getElementById('cantidadVendida').value,
            descripcion: document.getElementById('descripcion').value
        })
    }
    
    return(
        <dialog open={modal} className={container}>
            <button className={closeButton} onClick={modalHandler}>X</button>
            <form onSubmit={handlerSubmit}>
            {
                edit ? <h1 className={titleStyles}>Editar Instrumento</h1>
                     : <h1 className={titleStyles}>Nuevo Instrumento</h1>
            }
            <div className={formStyles}>
            <div>
            Nombre: <input type='text' id='nombre' className={inputStyle}/>
            Marca: <input type='text' id='marca' className={inputStyle}/>
            Modelo: <input type='text' id='modelo' className={inputStyle}/>
            Imagen: <input type='file' id='imagen' name='imagen' className={inputStyle}/>
            </div>
            <div>
            Precio: <input type='number' id='precio' className={inputStyle}/>
            Costo Envio: <input type='number' id='costoEnvio' className={inputStyle}/>
            Cantidad Vendida: <input type='number' id='cantidadVendida' className={inputStyle}/>
            Descripción: <input type='area' id='descripcion' className={inputStyle}/>
            </div>
            </div>
            <button className={submitButton} onClick={modalHandler}>{botonNombre}</button>
            </form>
        </dialog>
    )
}