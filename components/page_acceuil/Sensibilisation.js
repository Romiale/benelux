import React from 'react'
import Image from 'next/image'
import ImageSensibilisation from '../../images/BAC/sensibilisation.jpg'
import chapeau from '../../images/illustration/tabler_school.svg'
import styles from '../../styles/page_acceuil/sensibilisation.module.scss'

function Sensibilisation() {
    return (
        <section className={styles.sectionSensibilisation}>
            <div className={styles.sectionSensibilisation_illustrationImage}>
                <Image src={ImageSensibilisation} alt="sensibilisation à la polution" />
                <div className={styles.masque}></div>
            </div>
            <div className={styles.sectionSensibilisation_comment}>
                <h2>La sensibilisation à la pollution</h2>
                <p>
                    Benelux Afro Center est prêt a aider votre établissement à mener une campagne de sensibilisation à la pollution. <br/>
                    <a href="ne">En savoir plus</a>
                </p>
                <div className={styles.etablissements}>
                    <div className={styles.etablissements_item}>
                        <div><Image src={chapeau} alt="sensibilisation à la polution" /></div>
                        <span>ÉCOLE</span>
                    </div>
                     <div className={styles.etablissements_item}>
                        <div><Image src={chapeau} alt="sensibilisation à la polution" /></div>
                        <span>UNIVERSITÉ</span>
                    </div>
                     <div className={styles.etablissements_item}>
                        <div><Image src={chapeau} alt="sensibilisation à la polution" /></div>
                        <span>AUTRES</span>
                    </div>
                </div>
                <button>PLANNIFIER UNE CONFÉRENCE</button>
            </div>
        </section>
    )
}

export default Sensibilisation
