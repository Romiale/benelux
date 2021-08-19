import React from 'react'
import facebook from '../images/illustration/et_facebook.svg'
import twitter from '../images/illustration/et_twitter.svg'
import youtube from '../images/illustration/youtube.svg'
import bac from '../images/illustration/bac.svg'
import phone from '../images/illustration/akar-icons_phone.svg' 
import gmail from '../images/illustration/cib_gmail.svg' 
import styles from '../styles/footer.module.scss' 

function Footer() {
    return (
        <footer className={styles.Footer}>
            <div>
            <div className={styles.reseaux_sociaux}>
                <h3>Suivez-nous sur</h3>
                <div className={styles.groupes_icones}>
                    <div> <img src={facebook.src} alt="logo facebook" /> </div>
                    <div> <img src={youtube.src} alt="logo youtube" /> </div>
                    <div> <img src={twitter.src} alt="logo twitter" /> </div>
                </div>
            </div>
            <div className={styles.politique}>
                <h3>Politique de confidentialité</h3>
                <p>Lorem ipsum dolor amet sit consector adadptacing gater elitLorem ipsum dolor amet sit consector adadptacing gater elit</p>
            </div>
            <div className={styles.adresse}>
                <h3>Adresse</h3>
                <div className={styles.groupe_contact}>
                     <div>
                        <img src={phone.src} alt="image phone" />
                        <a href="tel:0821380925">+243821380925</a>
                     </div>
                     <div>
                         <img src={gmail.src} alt="logo gmail"/>
                        <a href="mailto:bac.rdc@backmd.net">bac.rdc@backmd.net</a>
                     </div>
                </div>
            </div>
        </div>
            <div className={styles.copiright}>
                <img src={bac.src} alt="logo bac" />
                <p> <span>&#169;</span>Copyright</p>
            </div>
        </footer>
    )
}

export default Footer
