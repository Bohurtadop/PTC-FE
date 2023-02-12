import { Image } from 'react-bootstrap';
import Butterfly from '../assets/Butterfly.svg';

function QuestionsHeader(props) {

    const { companyName } = props;

    return (
        <div className='Questions-header'>
            <div className='Company-icon-text'>
                <Image className='Header-image' src={Butterfly} />
                <p className='Sign m-0'>Butterfly</p>
            </div>
            <div className='Company-name'>
                <p><b>{companyName}</b></p>
            </div>
        </div>
    );
}

export default QuestionsHeader;