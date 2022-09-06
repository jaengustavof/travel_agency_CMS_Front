import "./advantages.scss"
import advantageImage from '../../assets/images/gallery/hero-section-2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faTag} from "@fortawesome/free-solid-svg-icons";

const Advantages = () => {
    return (
        <section className="advantages">
            <div className="advantages-image">
                <img src={advantageImage} alt=""/>
            </div>
            <div className="advantages-text">
                <div className="advantages-text_content">
                    <FontAwesomeIcon icon={faPlane} className="text_icons plane-icon" />
                    <span>Visit the greatest places</span>
                </div>
                <div className="advantages-text_content">
                    <FontAwesomeIcon icon={faClock} className="text_icons" />
                    <span>Make your own plans.</span>
                </div>
                <div className="advantages-text_content">
                    <FontAwesomeIcon icon={faTag} className="text_icons" />
                    <span>Save 50% on your next trip</span>
                </div>
            </div>
            
        </section>
    )
}

export default Advantages;