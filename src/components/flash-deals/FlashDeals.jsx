import Carousel from 'react-bootstrap/Carousel';
import './flashdeals.scss';
import maldives from '../../assets/images/gallery/maldives.png'
import dhigu from '../../assets/images/gallery/dhigu.png'
import paris from '../../assets/images/gallery/paris.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';

function FlashDeals() {
  return (
    <section className="flashDeals">
        <div className="flashDeals-container">
            <h3 className='flashDeals-container_heading'>Flash Deals</h3>
            <Carousel fade className='w-100 h-100' interval={3000}>
                <Carousel.Item>
                    <div className="carousel-page d-flex justify-content-between align-center">
                        <div className="flash-deal">
                            <img src={maldives} alt="" />
                            <div className="info-container">
                                <h4 className='info-container_title'>Mermaid Beach Resort: The most joyful way to spend your holiday</h4>
                                <div className="info-container_location d-flex justify-content-start align-center">
                                    <p><span> <FontAwesomeIcon icon={faLocationDot} /> </span>Maldives</p>
                                    <p><span><FontAwesomeIcon icon={faCalendar} /> </span>4 days</p>
                                </div>
                                <div className="info-container_price">
                                    <div className="discounted">$200</div>
                                    <div className="per-person">$175<span>/Per person</span></div>
                                    <div className="disc-tag">
                                        <span><FontAwesomeIcon icon={faTag} /> -15%</span> 
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flash-deal">
                            <img src={dhigu} alt="" />
                            <div className="info-container">
                                <h4 className='info-container_title'>Dhigu: Enjoy a romantic cruise tour of at the sunny side of life</h4>
                                <div className="info-container_location d-flex justify-content-start align-center">
                                    <p><span> <FontAwesomeIcon icon={faLocationDot} /> </span>Dhigu</p>
                                    <p><span><FontAwesomeIcon icon={faCalendar} /> </span>4 days</p>
                                </div>
                                <div className="info-container_price">
                                    <div className="discounted">$300</div>
                                    <div className="per-person">$250<span>/Per person</span></div>
                                    <div className="disc-tag">
                                        <span><FontAwesomeIcon icon={faTag} /> -15%</span> 
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flash-deal">
                            <img src={paris} alt="" />
                            <div className="info-container">
                                <h4 className='info-container_title'>Paris: Luxury destination without compromise</h4>
                                <div className="info-container_location d-flex justify-content-start align-center">
                                    <p><span> <FontAwesomeIcon icon={faLocationDot} /> </span>Paris</p>
                                    <p><span><FontAwesomeIcon icon={faCalendar} /> </span>4 days</p>
                                </div>
                                <div className="info-container_price">
                                    <div className="discounted">$375</div>
                                    <div className="per-person">$300<span>/Per person</span></div>
                                    <div className="disc-tag">
                                        <span><FontAwesomeIcon icon={faTag} /> -15%</span> 
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-page d-flex justify-content-between align-center">
                        <div className="flash-deal">
                            <img src={dhigu} alt=""  />
                            <div className="info-container">
                                <h4 className='info-container_title'>Dhigu: Enjoy a romantic cruise tour of at the sunny side of life</h4>
                                <div className="info-container_location d-flex justify-content-start align-center">
                                    <p><span> <FontAwesomeIcon icon={faLocationDot} /> </span>Dhigu</p>
                                    <p><span><FontAwesomeIcon icon={faCalendar} /> </span>4 days</p>
                                </div>
                                <div className="info-container_price">
                                    <div className="discounted">$300</div>
                                    <div className="per-person">$250<span>/Per person</span></div>
                                    <div className="disc-tag">
                                        <span><FontAwesomeIcon icon={faTag} /> -15%</span> 
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flash-deal">
                            <img src={paris} alt=""  />
                            <div className="info-container">
                                <h4 className='info-container_title'>Paris: Luxury destination without compromise</h4>
                                <div className="info-container_location d-flex justify-content-start align-center">
                                    <p><span> <FontAwesomeIcon icon={faLocationDot} /> </span>Paris</p>
                                    <p><span><FontAwesomeIcon icon={faCalendar} /> </span>4 days</p>
                                </div>
                                <div className="info-container_price">
                                    <div className="discounted">$375</div>
                                    <div className="per-person">$300<span>/Per person</span></div>
                                    <div className="disc-tag">
                                        <span><FontAwesomeIcon icon={faTag} /> -15%</span> 
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flash-deal">
                            <img src={maldives} alt=""/>
                            <div className="info-container">
                                <h4 className='info-container_title'>Mermaid Beach Resort: The most joyful way to spend your holiday</h4>
                                <div className="info-container_location d-flex justify-content-start align-center">
                                    <p><span> <FontAwesomeIcon icon={faLocationDot} /> </span>Maldives</p>
                                    <p><span><FontAwesomeIcon icon={faCalendar} /> </span>4 days</p>
                                </div>
                                <div className="info-container_price">
                                    <div className="discounted">$200</div>
                                    <div className="per-person">$175<span>/Per person</span></div>
                                    <div className="disc-tag">
                                        <span><FontAwesomeIcon icon={faTag} /> -15%</span> 
                                    </div>
                                </div>
                            </div>
                            
                        </div>  
                        
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-page d-flex justify-content-between align-center">
                        <div className="flash-deal">
                            <img src={paris} alt="" />
                            <div className="info-container">
                                <h4 className='info-container_title'>Paris: Luxury destination without compromise</h4>
                                <div className="info-container_location d-flex justify-content-start align-center">
                                    <p><span> <FontAwesomeIcon icon={faLocationDot} /> </span>Paris</p>
                                    <p><span><FontAwesomeIcon icon={faCalendar} /> </span>4 days</p>
                                </div>
                                <div className="info-container_price">
                                    <div className="discounted">$375</div>
                                    <div className="per-person">$300<span>/Per person</span></div>
                                    <div className="disc-tag">
                                        <span><FontAwesomeIcon icon={faTag} /> -15%</span> 
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flash-deal">
                            <img src={maldives} alt="" />
                            <div className="info-container">
                                <h4 className='info-container_title'>Mermaid Beach Resort: The most joyful way to spend your holiday</h4>
                                <div className="info-container_location d-flex justify-content-start align-center">
                                    <p><span> <FontAwesomeIcon icon={faLocationDot} /> </span>Maldives</p>
                                    <p><span><FontAwesomeIcon icon={faCalendar} /> </span>4 days</p>
                                </div>
                                <div className="info-container_price">
                                    <div className="discounted">$200</div>
                                    <div className="per-person">$175<span>/Per person</span></div>
                                    <div className="disc-tag">
                                        <span><FontAwesomeIcon icon={faTag} /> -15%</span> 
                                    </div>
                                </div>
                            </div>
                            
                        </div>  
                        <div className="flash-deal">
                            <img src={dhigu} alt="" />
                            <div className="info-container">
                                <h4 className='info-container_title'>Dhigu: Enjoy a romantic cruise tour of at the sunny side of life</h4>
                                <div className="info-container_location d-flex justify-content-start align-center">
                                    <p><span> <FontAwesomeIcon icon={faLocationDot} /> </span>Dhigu</p>
                                    <p><span><FontAwesomeIcon icon={faCalendar} /> </span>4 days</p>
                                </div>
                                <div className="info-container_price">
                                    <div className="discounted">$300</div>
                                    <div className="per-person">$250<span>/Per person</span></div>
                                    <div className="disc-tag">
                                        <span><FontAwesomeIcon icon={faTag} /> -15%</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    </section>
  );
}

export default FlashDeals;
