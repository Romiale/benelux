import Layout from "../components/Layout";
import Styles from "../styles/page_apropos/apropos.module.scss";
import HeaderPage from "../components/HeaderPage";

const Apropos = () => {
	return (
		<Layout>
			<HeaderPage/>
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
			</div>
		</Layout>
	 );
}
 
export default Apropos;