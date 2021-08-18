import Image from 'next/image';
import Styles from '../../styles/page_apropos/cardorganisation.module.scss';
import illustrationImage from '../../images/illustration/chevron-down.svg';

const CardOrganisation = () => {
	return (
		<div className={Styles.cardorganisation}>
			<div className={Styles.cardorganisation_header}>
				<div className={Styles.cardorganisation_title1}>1</div>
				<div className={Styles.cardorganisation_title2}>Santé</div>
				<div className={Styles.cardorganisation_title3}><Image src={illustrationImage} alt="chevron-down"/></div>
			</div>
			<div>
				<p>
					Appui à la réforme de la gestion des Ressources Humaines en Santé avec la participation active de l'expertise de la diaspora congolaise;
					Soutien à l'informatisation du secteur de la santé;
					Renforcement du rôle des organisations de la Société Civile du secteur Santé en tant que 3ème pilier du système de santé de la RD Congo par l'approche décentralisée et participative
				</p>
			</div>
		</div>
	 );
}
 
export default CardOrganisation;