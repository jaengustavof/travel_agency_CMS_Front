import './search.scss';
import { useState } from 'react';
import heroImage from '../../assets/images/gallery/hero-section-1.png'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import handleClick from './search';
import ActivitiesFrom from '../search-forms/activities';
import FlightFrom from '../search-forms/flights';
import HotelFrom from '../search-forms/hotels';

const Search = () => {
    const [radioValue, setRadioValue] = useState('flights');
    const Form = () =>{
        if(radioValue === 'flights'){
            return <FlightFrom />
        }else if(radioValue === 'hotels'){
            return <HotelFrom/>
        }else if(radioValue === 'activities'){
            return <ActivitiesFrom/>
        }
    }

    const radios = [
      { name: <FontAwesomeIcon icon={faPlane} />, value: 'flights' },
      { name: <FontAwesomeIcon icon={faHotel} />, value: 'hotels' },
      { name: <FontAwesomeIcon icon={faMap} />, value: 'activities' },
    ];

    return (
        <section className='search'>
            
            <div className='search-blank'></div>
            <div className='search-image'>
                <img src={heroImage} alt='' />
            </div>
            <div className='search-container'>

                <div className='search-container_fields'>
                    <h1 className='search-container_h1'>Let’s make a tour</h1>
                    <h2 className='search-container_h2'>Discover the beauty</h2>
                    <ButtonGroup className='button-group  gap-3'>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type='radio'
                            variant={'outline-tabs'}
                            name='radio'
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                            className={idx === 0?'search-button selected':'search-button'}
                            onClick={(e) =>handleClick(e.currentTarget)}

                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
            
                    <Form />
                </div>
                
            </div>
        </section>  
    )
}

export default Search