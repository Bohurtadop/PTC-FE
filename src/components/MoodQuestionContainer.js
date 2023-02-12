import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import VeryHappy from '../assets/VeryHappy.svg';
import VeryUnhappy from '../assets/VeryUnhappy.svg';
import Happy from '../assets/Happy.svg';
import Neutral from '../assets/Neutral.svg';
import Unhappy from '../assets/Unhappy.svg';


function MoodQuestionContainer() {

    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        navigate('/questions', { state: { feelingImage: event.target.src } });
    }

    return (
        <div className='Question-container'>
            <p><b>TEST INC.</b> would like to know:</p>
            <h2 className='Question'>How is your week going?</h2>
            <div className='Options-container'>
                <Image className='Option-image' id='veryunhappy' onClick={handleClick} src={VeryUnhappy} />
                <Image className='Option-image' id='unhappy' onClick={handleClick} src={Unhappy} />
                <Image className='Option-image' id='neutral' onClick={handleClick} src={Neutral} />
                <Image className='Option-image' id='happy' onClick={handleClick} src={Happy} />
                <Image className='Option-image' id='veryhappy' onClick={handleClick} src={VeryHappy} />
            </div>
            <p className='Alert'>Your answer will always remain anonymous</p>
        </div>
    );
}

export default MoodQuestionContainer;