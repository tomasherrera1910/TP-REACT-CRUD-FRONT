import {useState} from 'react'

import styles from '../styles/search.module.css'
const {inputSearch, container, buttonMostrar} = styles

export function Search({instrumentos, setSearch, busqueda, setBusqueda}){
    const[busquedaInput, setBusquedaInput] = useState('')
    const inputHandler = e => {
        setBusquedaInput(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault()
        setBusqueda(busquedaInput)
        setSearch(instrumentos.filter(instrumento => instrumento.nombre.toLowerCase().includes(busqueda.toLowerCase())))
    }
    const mostrarTodosHandler = () => {
        setSearch(null)
        setBusquedaInput('')
        setBusqueda('')
    }
    return(
        <div className={container}>
        <form onSubmit={submitHandler}>
        <input type='text' placeholder='Buscar por nombre...' value={busquedaInput} onChange={inputHandler} className={inputSearch}/>
        </form>
        <button onClick={mostrarTodosHandler} className={buttonMostrar}>Mostrar Todos</button>
        </div>
    )
}