import React from 'react'
import CardValorisaon from './CardValorisaon'
import styles from '../../styles/page_acceuil/sectionValorisationDeDechets.module.scss'
import ImageComposentsElectronics from '../../images/BAC/Equipements-lectroniques.jpg'

function SectionValorisationDeDechets() {
    return (
        <section className={styles.SectionValorisationDeDechets}>
            <h2>La valorisation de déchets électroniques</h2>
            <div>
                 <div className={styles.SectionValorisationDeDechets_illustration}>
                    <div> <img src={ImageComposentsElectronics.src} alt="equiments éléctronique" /> </div>
                    <button>ACHETER UN PRODUIT</button>
                </div>
                <div className={styles.SectionValorisationDeDechets_comment}>
                    <CardValorisaon/>
                    <CardValorisaon/>
                    <CardValorisaon/>
                    <CardValorisaon/>
                </div>
            </div>
        </section>
    )
}

export default SectionValorisationDeDechets
