import React from 'react'
import Slider from "react-slick";
import CardPresentationAcceuil from '../../components/page_acceuil/CardPresentationAcceuil'
import GroupeBouttonAcceuil from '../../components/page_acceuil/GroupeBouttonAcceuil'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../../styles/page_acceuil/Home.module.scss'


function SectionAcceuil() {

    return (
      <section className={styles.slides_presentation_Acceuil}>
          <CardPresentationAcceuil />
          <GroupeBouttonAcceuil/>
        </section>
    )
}

export default SectionAcceuil
