import Styles from '../styles/header_page.module.scss';

const HeaderPage = () => {
	return (
		<div className={Styles.container_intro}>
			<div className={Styles.container_items}>
				<div className={Styles.items0}>Q</div>
				<div className={Styles.items1}>UI SOMMES-NOUS ?</div>
				<div className={Styles.items2}>
					<p>
						Benelux Afro Center, en sigle "BAC ASBL", est une association sans but lucratif internationale de droit belge créée depuis le 1er janvier 1998 à Bruxelles par un groupe de la diaspora africaine de Belgique dans un contexte d'une auto-prise en charge communautaire, et publiée au Moniteur Belge sous le numéro 05171106.
					</p>
				</div>
			</div>
		</div>
	);
	
}
export default HeaderPage;