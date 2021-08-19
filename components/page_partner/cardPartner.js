import Styles from '../../styles/page_partner/cardpartner.module.scss';
import Image from 'next/image';
import illustrationImage from '../../images/illustration/roi_baud.svg';

const CardPartner = () => {
	return (
		<div className={Styles.cardpartner}>
			<h2 className={Styles.cardpartner_title}>ROLL BACK MALARIA</h2>
			<div className={Styles.cardpartner_paragraphe}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing quis phasellus etiam dictum. Sapien laoreet suspendisse  
				</p>
			</div>
			<div className={Styles.cardpartner_picture}><Image src={illustrationImage} alt="chevron-down" /></div>
			<div className={Styles.cardpartner_container_btn}>
				<button>TOUT SAVOIR SUR ROLL BACK MALARIA</button>
			</div>
		</div>
	);
}
 
export default CardPartner;