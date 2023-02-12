import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import VeryHappy from '../assets/VeryHappy.svg';
import VeryUnhappy from '../assets/VeryUnhappy.svg';
import Happy from '../assets/Happy.svg';
import Neutral from '../assets/Neutral.svg';
import Unhappy from '../assets/Unhappy.svg';

function MoodQuestionContainer(props) {

    const navigate = useNavigate();
    const { companyName } = props;

    const handleClick = (event) => {
        event.preventDefault();
        navigate(`/questions/${event.target.alt}`, { state: { mood: event.target.id, feelingImage: event.target.src, companyName } });
    }

    return (
        <div className='Question-container'>
            <p><b>{companyName}</b> would like to know:</p>
            <h2 className='Question'>How is your week going?</h2>
            <div className='Options-container'>
                <Image className='Option-image' alt='1' id='veryunhappy' onClick={handleClick} src={VeryUnhappy} />
                <Image className='Option-image' alt='2' id='unhappy' onClick={handleClick} src={Unhappy} />
                <Image className='Option-image' alt='3' id='neutral' onClick={handleClick} src={Neutral} />
                <Image className='Option-image' alt='4' id='happy' onClick={handleClick} src={Happy} />
                <Image className='Option-image' alt='5' id='veryhappy' onClick={handleClick} src={VeryHappy} />
            </div>
            <p className='Alert'>Your answer will always remain anonymous</p>
        </div>
    );
}

export default MoodQuestionContainer;