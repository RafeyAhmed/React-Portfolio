import './About.css'
import about from '../assets/aboutbg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function About() {

    return (
        <section id='about' className=' text-center section-about-me'>
            <div className="container py-5 mt-5">
                <div className="row mt-5">
                    <h2 className='display-3'>
                        About me
                    </h2>
                    <hr className='text-muted mt-3' />
                </div>
                <div className="row mt-4">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <p className='lead'>
                            Hello! I'm Rafay Ahmed, a self-driven and deeply curious developer passionate about building meaningful digital experiences. My journey into software began with a spark of interest and quickly evolved into a focused mission — to master full-stack development while aligning my work with higher values and purpose.
                        </p><br />
                        <p className='lead'>
                            I specialize in JavaScript, particularly with frameworks like React for frontend development, and I'm building a growing proficiency in Node.js and backend technologies. One of my proudest creations so far is Kitabo, a feature-rich Discord bot ecosystem that reflects both my technical skill and my desire to create tools that serve communities.
                        </p>
                    </div>
                    <div className="col-md-2"></div>

                </div>
            </div>
        </section>
    )
}