import React from 'react'
import Image from 'next/image'
import background from '../../images/background_sec_une.png'
import styles from '../../styles/page_acceuil/CardPresentationAcceuil.module.scss';

function CardPresentationAcceuil() {
    return (
        <div className={styles.presentationCard}>
            <img src={background.src} alt="images de déchets" />
            <div className={styles.presentationCard_comment}>
                <div>
                <h1>NON À LA POLLUTION</h1>
                    <p>Les déchets sont considérés comme un sous-produit indésirable du processus de production qu&apos;il faut limiter pour éviter de contaminer les ressources en sols, en eau et en air au-delà du niveau jugé acceptable.</p>
                </div>
            </div>
        </div>
    )
}

export default CardPresentationAcceuil
