import React from 'react'
import styles from '../styles/dropDownActivites.module.scss'

function dropDownActivites({dropDownOut,dropDown}) {
    return (
        <div className={styles.dropDownActivites} onMouseLeave={dropDownOut} onMouseOver={dropDown}>
            <div className={styles.dropDownActivites_item}>
                <h3>Environement</h3>
                <div>
                    <a href="re">Gestion durable des DEEE</a>
                    <a href="re">Solidarité numérique Nord-sud</a>
                </div>
                   <h3>Conférences et Ateliers</h3>

            </div>
            <div className={styles.dropDownActivites_item}>
                <h3>Santé</h3>
                  <div>
                    <a href="re"> Renforcement de capacités du secteur de la santé</a>
                    <a href="re">Fonds spécifiques medicals</a>
                </div>
            </div>
        </div>
    )
}

export default dropDownActivites
