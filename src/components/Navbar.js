import { Link } from "react-router-dom"
import styles from '../styles/navbar.module.css'
const {header, link} = styles
export function Navbar(){
    return(
        <header className={header}>
            <Link to='/' className={link}>HOME</Link>
            <Link to='/dondeEstamos' className={link}>Donde Estamos</Link>
            <Link to='/productos' className={link}>Productos</Link>
        </header>
    )
}