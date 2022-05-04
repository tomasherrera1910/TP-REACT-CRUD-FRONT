import {useState, useEffect} from 'react'
import getInstrumentos from '../utils/getInstrumentos'
import deleteInstrumento from '../utils/deleteInstrumento'
import {Modal} from './Modal'
import clearForm from '../utils/clearForm'
import InstrumentoCRUDMap from '../utils/instrumentoMap'

import styles from '../styles/crud.module.css'
import { Search } from './Search'
const {addButton} = styles

export function CRUD(){
    const[instrumentos, setInstrumentos] = useState([])
    const[modal, setModal] = useState(false)
    const[edit, setEdit] = useState(false)
    const[search, setSearch] = useState(null)
    const [busqueda, setBusqueda] = useState('')
    
    useEffect(() => {
        getInstrumentos()
        .then(setInstrumentos)
        .catch(e => console.log(`error: ${e}`))
    },[instrumentos])
    useEffect(() => {
        if(search){
            setSearch(instrumentos.filter(instrumento => instrumento.nombre.toLowerCase().includes(busqueda.toLowerCase())))
        }
    },[search, busqueda, instrumentos])

    const modalHandler = () => {
        setModal(true)
        setEdit(false)
        clearForm()
    }
    const editHandler = (id) => {
        setModal(true)
        setEdit(instrumentos.find(instrumento => instrumento.id === id))
    }
    return(
        <div>
            <Search instrumentos={instrumentos} setSearch={setSearch} busqueda={busqueda} setBusqueda={setBusqueda}/>
            <Modal modal={modal} setModal={setModal} edit={edit} setEdit={setEdit}/>
            <section>
                <button className={addButton} onClick={modalHandler}>+</button>
            </section>
        {search 
            ? <InstrumentoCRUDMap instrumentos={search} editHandler={editHandler} deleteInstrumento={deleteInstrumento} />
            : <InstrumentoCRUDMap instrumentos={instrumentos} editHandler={editHandler} deleteInstrumento={deleteInstrumento} />
        }
        </div>
    )
}