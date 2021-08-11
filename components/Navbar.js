import React from 'react'
import styles from '../styles/navbar.module.scss'
import style from '../styles/dropDownActivites.module.scss'
import Image from 'next/image'
import logo from '../images/logo_beneluxe.svg'
import DropDownActivites from '../components/DropDownActivites'
import {useState,useEffect} from 'react'

function Navbar() {
    const [open, setOpen] = useState(false)
    
    const dropDown = () => {
        setOpen(true)
    }
    
    const dropDownOut = () => {
       setOpen(false)
    }
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo.src} alt="logo beneluxe"/>
            </div>
            <ul>
                <li className={styles.active}><a href="ne">Acceuil</a></li>
                <li className={styles.dropDown}  onMouseOver={()=>dropDown()} onMouseLeave={()=>dropDownOut()}>
                    <a href="ne">Activités <span>&gt;</span>  </a>

                    {open && <DropDownActivites dropDownOut={() => dropDownOut()} dropDown={()=>dropDown()} /> }
                </li>
                <li><a href="ne">Agenda</a></li>
                <li ><a href="ne">Partenaires</a></li>
                <li><a href="ne">À propos</a></li>
                <li className={styles.connection}><a href="ne">Se connecter</a></li>
            </ul>
      </nav>
    )
}

export default Navbar
