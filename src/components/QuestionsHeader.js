import { Image } from 'react-bootstrap';
import Butterfly from '../assets/Butterfly.svg';

function FeelingHeader() {

    return (
        <div className='Feeling-header'>
            <Image className='Header-image' src={Butterfly} />
            <p className='Sign m-0'>Butterfly</p>
            <p className='Slogan-strong'>Your Team's Happiness Manager</p>
        </div>
    );
}

export default FeelingHeader;