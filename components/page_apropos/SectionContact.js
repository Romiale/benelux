import Styles from '../../styles/page_apropos/sectionContact.module.scss';
import Image from 'next/image';
import illustrationImage from '../../images/illustration/bx_map.svg';

const SectionContact = () => {
	return (
		<div className={Styles.container_contact}>
			<div className={Styles.container_localisation}>
				<h2 className={Styles.container_title}>Nos Différentes Adresses</h2>
				<div className={Styles.container_map}>
					<div className={Styles.container_google_map}>
						<div className={Styles.container_google_map_bruxel}>
							<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10071.015439791676!2d4.2898889!3d50.8727564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3861f5afaf5811ac!2sBenelux%20Afro%20Center!5e0!3m2!1sfr!2scd!4v1629365069069!5m2!1sfr!2scd" width="100%" height="100%" allowFullScreen="" loading="lazy"></iframe>
						</div>
						<div className={Styles.container_google_map_kin}>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5080157546004!2d15.2722938152039!3d-4.315199396863453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33d17ea85b4b%3A0x1eb35bce31945791!2sAve%20Des%20Cliniques%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629365928297!5m2!1sfr!2scd" width="100%" height="100%" allowFullScreen="" loading="lazy"></iframe>
						</div>
					</div>
					<div className={Styles.container_lieux}>
						<div className={Styles.container_lieux_bruxel}>
							<h4 className={Styles.container_title}>
								<Image src={illustrationImage} className={Styles.container_title_logo} />
								<span>Belgique</span>
							</h4>
							<p>
								Avenue des cliniques n°8480<br/>
								S/c Clinique Ngaliema<br/>
								Kinshasa/Gombe<br/>
								+243 82 13 80925<br/>
								E-mail : bac.rdc@bacmd.net<br/>
							</p>
						</div>
						<div className={Styles.container_lieux_kin}>
							<h4 className={Styles.container_title}>
								<Image src={illustrationImage} className={Styles.container_title_logo} />
								<span>RDC</span>
							</h4>
							<p>
								Avenue des cliniques n°8480<br/>
								S/c Clinique Ngaliema<br/>
								Kinshasa/Gombe<br/>
								+243 82 13 80925<br/>
								E-mail : bac.rdc@bacmd.net<br/>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={Styles.container_message}>
				<h2 className={Styles.container_title}>Contactez-nous</h2>
				<form className={Styles.formulaire}>
					<input type="email" placeholder="Email" className={Styles.container_items}/>
					<input type="text" placeholder="Objet" className={Styles.container_items}/>
					<textarea placeholder="Message"></textarea>
					<input type="submit" value="ENVOYER" className={Styles.send_button}></input>
				</form>
			</div>
		</div>
	);
}
 
export default SectionContact;