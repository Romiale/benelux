import HeaderPage from '../components/HeaderPage';
import Layout from '../components/Layout';
import CardPartner from '../components/page_partner/cardPartner';
import Styles from '../styles/page_partner/partner.module.scss';
const Partner = () => {
	return (
		<Layout>
			<HeaderPage />
			<div className={Styles.container_partner}>
				<h2 className={Styles.container_title}>Objectif principaux de Benelux Afro Center</h2>
				<div className={Styles.container_partner_items}>
					<CardPartner/>
				</div>
				<div className={Styles.container_devenir_partner}>
            			<h2>Soutenir nos actions, c’est participer éfficacement à la lutte contre la pollution</h2>
            			<div>
                 			<button>DEVENIR PARTENAIRE</button>
            			</div>
				</div>
			</div>
			
		</Layout>
	);
}
 
export default Partner;