import React from 'react'
import Cardparticipation from '../../components/page_acceuil/Cardparticipation'
import styles from '../../styles/page_acceuil/sectionNotreParticipation.module.scss'

function SectionNotreParticipation() {
    return (
        <section className={styles.SectionNotreParticipation}>
            <h2>Notre participation dans la communauté</h2>
            <div className={styles.groupeParticipation}>
                <Cardparticipation/>
                <Cardparticipation/>
                <Cardparticipation/>
                <Cardparticipation/>
            </div>
            <button>EN SAVOIR PLUS</button>
       </section>
    )
}

export default SectionNotreParticipation
