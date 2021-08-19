import React from 'react'
import Image from 'next/image'
import styles from '../../styles/page_acceuil/CardPresentationAcceuil.module.scss';

function CardPresentationAcceuil({title,illustrationImage}) {
    return (
        <div className={styles.slidItem}>
        <div className={styles.presentationCard}>
            <img src={illustrationImage.src} alt="images de déchets" />
            <div className={styles.presentationCard_comment}>
                <div>
                <h1>{title}</h1>
                    <p>Les déchets sont considérés comme un sous-produit indésirable du processus de production qu&apos;il faut limiter pour éviter de contaminer les ressources en sols, en eau et en air au-delà du niveau jugé acceptable.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CardPresentationAcceuil
