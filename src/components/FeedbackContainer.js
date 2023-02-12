import { useState } from 'react';
import { Image } from 'react-bootstrap';
import VeryHappy from '../assets/VeryHappy.svg';
import VeryUnhappy from '../assets/VeryUnhappy.svg';
import Happy from '../assets/Happy.svg';
import Neutral from '../assets/Neutral.svg';
import Unhappy from '../assets/Unhappy.svg';
import EditIcon from '../assets/EditIcon.svg';

function FeedbackContainer(props) {

    const { updateMood, feedbackText } = props;
    const [showSelectMood, setShowSelectMood] = useState(false);
    const [feelingImage, setFeelingImage] = useState(props.feelingImage);

    const handleMoodClick = (event) => {
        event.preventDefault();
        const mood = event.target.id;
        switch (mood) {
            case 'veryhappy':
                updateMood(mood);
                setFeelingImage(VeryHappy);
                break;
            case 'veryunhappy':
                updateMood(mood);
                setFeelingImage(VeryUnhappy);
                break;
            case 'happy':
                updateMood(mood);
                setFeelingImage(Happy);
                break;
            case 'neutral':
                updateMood(mood);
                setFeelingImage(Neutral);
                break;
            case 'unhappy':
                updateMood(mood);
                setFeelingImage(Unhappy);
                break;
            default:
                updateMood(mood);
                setFeelingImage(Neutral);
                break;
        }
        setShowSelectMood(false);
    }

    const handleEditClick = (event) => {
        event.preventDefault();
        setShowSelectMood(true);
    }

    return (
        <div className='Feedback-container'>
            {
                showSelectMood ?
                    <div className='Reselect-mood-container'>
                        <p className='Wrong-mood-text'>Did you make a mistake? Please select your correct mood:</p>
                        <div className='Options-container'>
                            <Image className='Option-image' id='veryunhappy' onClick={handleMoodClick} src={VeryUnhappy} />
                            <Image className='Option-image' id='unhappy' onClick={handleMoodClick} src={Unhappy} />
                            <Image className='Option-image' id='neutral' onClick={handleMoodClick} src={Neutral} />
                            <Image className='Option-image' id='happy' onClick={handleMoodClick} src={Happy} />
                            <Image className='Option-image' id='veryhappy' onClick={handleMoodClick} src={VeryHappy} />
                        </div>
                    </div>
                    :
                    <div>
                        <div className='Options-container'>
                            <Image className='Edit-image' id='editImage' onClick={handleEditClick} src={EditIcon}></Image>
                            <Image className='Chosen-image' id='feelingImage' src={feelingImage} />
                            <p className='Mood-text'>{feedbackText} Thank you for your feedback</p>
                        </div>
                        <p className='Alert'>Your answer will always remain anonymous</p>
                    </div>
            }
        </div>
    );
}

export default FeedbackContainer;