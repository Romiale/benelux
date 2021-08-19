import React from 'react'
import Slider from "react-slick";
import { Zoom } from 'react-slideshow-image';
import CardPresentationAcceuil from '../../components/page_acceuil/CardPresentationAcceuil'
import GroupeBouttonAcceuil from '../../components/page_acceuil/GroupeBouttonAcceuil'
import styles from '../../styles/page_acceuil/Home.module.scss'
import medicaments from '../../images/BAC/medicaments.jpg'
import nonAlaPollution from '../../images/background_sec_une.png'
import beneluxe from '../../images/BAC/beneluxe.jpg'




function SectionAcceuil() {
 const zoomInProperties = {
  scale: 1.1,
  autoplay: true,
   infinite: true,
   duration: 6000,
   transitionDuration:1000,
  arrows:false
  }

    return (
      <section className={styles.slides_presentation_Acceuil}>
        <Zoom {...zoomInProperties} className={styles.slides_presentation_Acceuil}>
          <CardPresentationAcceuil title={"BENELUXE AFRO CENTER"} illustrationImage={beneluxe} />
          <CardPresentationAcceuil title={"BENELUXE AFRO CENTER DANS LA SANTÉ"} illustrationImage={medicaments}/>
          <CardPresentationAcceuil title={"NON À LA POLLUTION"} illustrationImage={nonAlaPollution}/>
        </Zoom>
          <GroupeBouttonAcceuil/>
        </section>
    )
}

export default SectionAcceuil
