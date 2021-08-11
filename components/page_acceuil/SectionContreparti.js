import React from 'react'
import Image from 'next/image'
import imagePoubelle from '../../images/poubelle.png'
import styles from '../../styles/page_acceuil/sectionContreparti.module.scss'

function SectionContreparti() {
    return (
        <section className={styles.SectionContreparti}>
            <div className={styles.SectionContreparti_comment}>
                <h2>En te débarrassant de tes déchets tu pourras bénéficier d’une contrepartie</h2>
                <p>Les déchets sont considérés comme un sous-produit indésirable du processus de production qu&apos;il faut limiter pour éviter de contaminer les ressources en sols, en eau et en air au-delà du niveau jugé acceptable.
                 <br/>
                <a href="be" className={styles.EnSavoirPlus}>En savoir plus</a> 
                </p>
                <button>SE DÉBARASSER D&apos;UN DÉCHET</button>
            </div>
            <div className={styles.SectionContreparti_image}>
                <img src={imagePoubelle.src} alt="images de déchets" />
            </div>
     </section>
    )
}

export default SectionContreparti
