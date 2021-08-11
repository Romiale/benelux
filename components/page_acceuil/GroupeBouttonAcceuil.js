import React from 'react'
import styles from '../../styles/page_acceuil/groupeBoutton.module.scss'


function GroupeBouttonAcceuil() {
    return (
        <div className={styles.groupeBoutton}>
            <button>SE DEBARRASSER D’UN DECHET</button>
            <button>PLANNIFIER UNE CONFÉRENCE</button>
            <button>PROGRAMME DES ÉVENEMENTS</button>
        </div>
    )
}

export default GroupeBouttonAcceuil
