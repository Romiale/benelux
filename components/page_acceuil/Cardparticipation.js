import React from 'react'
import Image from 'next/image'
import styles from '../../styles/page_acceuil/cardparticipation.module.scss'
import illustrationImage from '../../images/illustration/tabler_school.svg' 

function Cardparticipation() {
    return (
        <div className={styles.cardparticipation}>
            <div>
                <Image src={illustrationImage} alt="illustration participation en bac en RDC"/>
            </div>
            <h3>Gestion durable de DEEE en RDC</h3>
            <p>lorem ipsum selit dore manus ate droril meanao retur nobis deratorus </p>
        </div>
    )
}

export default Cardparticipation
