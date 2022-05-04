import { Link } from "react-router-dom"
import styles from '../styles/navbar.module.css'
const {header, link, linkCrud} = styles
export function Navbar(){
    return(
        <header className={header}>
            <Link to='/' className={link}>HOME</Link>
            <Link to='/productos' className={link}>Productos</Link>
            <Link to='/dondeEstamos' className={link}>Donde Estamos</Link>
            <Link to='/CRUD' className={linkCrud}>CRUD</Link>
        </header>
    )
}