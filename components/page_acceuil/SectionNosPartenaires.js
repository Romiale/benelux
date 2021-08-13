import React from 'react'
import styles from '../../styles/page_acceuil/Nospartenaires.module.scss'
import Be from '../../images/BAC/cooperation.png'
import CloseTheGap from '../../images/BAC/close-the-gap.png'
import worldloop from '../../images/BAC/worldloop.png'
import Pod from '../../images/BAC/pod.png'
import RoiBaudoin from '../../images/BAC/foundation-roi-baudouin.jpg'
import RollbackMalaria from '../../images/BAC/roll-back-malaria.png'
import Ressources from '../../images/BAC/ressources.png'

function SectionNosPartenaires() {
    return (
        <section className={styles.SectionNosPartenaires}>
            <h2>Nous avons le plaisir de travailler avec</h2>
            <div>
            <div className={styles.logosPartenaires}>
                <div> <img src={Be.src} alt="" /> </div>
                <div> <img src={CloseTheGap.src} alt="" /> </div>
                <div> <img src={worldloop.src} alt="" /> </div>
                <div> <img src={RollbackMalaria.src} alt="" /> </div>
                <div> <img src={Pod.src} alt="" /> </div>
                <div> <img src={RoiBaudoin.src} alt="" /> </div>
                <div> <img src={Ressources.src} alt="" /> </div>
            </div>
            <p>Lorem ipsum dolor amet sit gear oposu nosa lorem Diam consector adipsingLorem ipsum dolor amet sit gear oposu nosa lorem Diam consector adipsingipsum dolor amet sit gear oposu nosa lorem Diam consector adipsingLorem ipsum dolor amet sit gear oposu nosa lorem Diam consector adipsingipsum dolor amet sit gear oposu nosa lorem Diam consector adipsingLorem ipsum dolor amet sit gear oposu nosa lorem Diam consector adipsing</p>
            </div>
        </section>
    )
}

export default SectionNosPartenaires
