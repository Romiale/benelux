import React from 'react'
import styles from '../../styles/page_acceuil/sectionSante.module.scss'
import logoCongoDorpen from '../../images/BAC/logo-congodorpen-2.png'
import ImagePolio from '../../images/BAC/polio.jpeg'
import ImageHopital from '../../images/BAC/index.jpeg'
import ImageSanteAuCongo from '../../images/BAC/sante-au-congo-1.jpg'
import ImageMedicaments from '../../images/BAC/medicaments.jpg'
import ImageRotary from '../../images/BAC/rotary-logo-color-2019-simplified.svg'
import ImageFoncaba from '../../images/BAC/KBA_Foncaba.gif'
import Image from 'next/image'


function SectionSante() {
    return (
        <section className={styles.SectionSante}>
            <div className={styles.SectionSante_comment}>
                <h2>Benelux Afro center dans  la santé</h2>
                <p>Sur le plan de nos activités  en RDC, le secteur de la santé est l’une de nos priorités. Dépuis 2017 nous avons Créé des mutuelles de santé MUSA avec la participation de :</p>
                <div>
                    <div className={styles.logoPartenaire}>  
                       <div><img src={logoCongoDorpen.src} alt="logo" /></div>
                        <div><img src={ImageRotary.src} alt="logo" /></div>
                        <div><img src={ImageFoncaba.src} alt="logo" /></div>
                  </div>
                </div>
                <button>VOIR NOS ACTIONS</button>
            </div>
            <div className={styles.SectionSante_illustration}>
                <div> <img src={ImagePolio.src} alt="illustration" /> </div>
                <div> <img src={ImageHopital.src} alt="illustration" /> </div>
                <div> <img src={ImageSanteAuCongo.src} alt="illustration" /> </div>
                <div> <img src={ImageMedicaments.src} alt="illustration" /> </div>
            </div>
        </section>
    )
}

export default SectionSante
