import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Button({label = 'Learn more'}) {
    return (
        <button className='btn btn-primary'>{label}
            <FontAwesomeIcon icon={faArrowRight} className='ms-2 custom-arrow' />
        </button>
    )
}