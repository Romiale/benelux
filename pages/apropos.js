import Layout from "../components/Layout";
import CardFinalite from "../components/page_apropos/cardFinalite";
import CardOrganisation from "../components/page_apropos/cardOrganisation";
import Styles from "../styles/page_apropos/apropos.module.scss";

const Apropos = () => {
	return (
 		<Layout>
			<div className={Styles.container_intro}>
				<div className={Styles.container_items}>
					<div className={Styles.items0}>Q</div>
					<div className={Styles.items1}>UI SOMMES-NOUS ?</div>
					<div className={Styles.items2}>
						<p>
							Benelux Afro Center, en sigle "BAC ASBL", est une association sans but lucratif internationale de droit belge créée depuis le 1er janvier 1998 à Bruxelles par un groupe de la diaspora africaine de Belgique dans un contexte d'une auto-prise en charge communautaire, et publiée au Moniteur Belge sous le numéro 05171106.
						</p>
					</div>
					<div className={Styles.items3}></div>
				</div>
			</div>
			<div className={Styles.container_objectif}>
				<h2 className={Styles.container_title}>Objectif principaux de Benelux Afro Center</h2>
				<div className={Styles.container_objectif_items}>
					<div className={Styles.objectif_items1}>
							<span className={Styles.circle}>1</span> Créer les opportunités de formation et mise à l'emploi des africains pour une meilleure insertion dans le pays d'accueil
					</div>
					<div className={Styles.objectif_items2}>
							<span className={Styles.circle}>2</span> Valoriser les acquis de la diaspora dans le pays d'accueil et dans leurs pays d'origine.
					</div>
				</div>
			</div>
			<div className={Styles.container_finalite}>
				<h2 className={Styles.container_title}>Finalités de Benelux Afro Center</h2>
				<div className={Styles.container_finalite_items}>
					<div className={Styles.fond}></div>
					<CardFinalite />
					<CardFinalite />
					<CardFinalite />
				</div>
			</div>

			<div className={Styles.container_organisation}>
				<h2 className={Styles.container_title}>Organisation pratique de la Benelux Afro Center</h2>
				<p>
					Pour ce faire, BAC Asbl est actif en même temps en Belgique pour une gamme très variée d'activités de coordination du programme financé par la DGD et d'économie sociale, et en République Démocratique du Congo dans les secteurs et domaines d'intervention ci-après :
				</p>
				<CardOrganisation />
				<CardOrganisation />
				<CardOrganisation/>
			</div>
		</Layout>
	 );
}
 
export default Apropos;