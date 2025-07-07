import './Hero.css'
import sittingImg from '../assets/sitting.png'
import Button from './subs/ButtonPrimary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    return (
        <section className='hero-section my-5 py-3'>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-5 d-flex flex-column justify-content-center align-items-center">
                        <img src={sittingImg} alt="image" style={{ width: '250px' }} />
                    </div>
                    <div className="col-md-7 d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0">
                        <h1 className='fs-bold display-2'>My Portfolio</h1>
                        <p className='fs-bold'>Hi from Syed Rafay Ahmed</p>
                        <a href="#about">
                            <Button label='Scroll down'/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}