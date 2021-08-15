import Image from 'next/image'
import Styles from '../../styles/page_apropos/cardfinalite.module.scss'
import illustrationImage from '../../images/illustration/partnership.svg'
const CardFinalite = () => {
	return (
		<div className={Styles.cardfinalite}>
            <div>
                <Image src={illustrationImage} alt="partnership"/>
            </div>
            <h3>Solidarité Nord - Sud</h3>
			<p>
				Dans la lutte contre la fracture numérique à peu de frais dans le secteur administratif et le secteur social (hôpitaux, Centres de Santé, et écoles) avec du matériel informatique reconditionné
			</p>
		</div>
	 );
}
 
export default CardFinalite;