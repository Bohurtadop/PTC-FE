import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import StarContainer from './StarContainer';

function RangeQuestionContainer(props) {

    const { question, index, array, setAnswer, setText } = props;
    const [value, setValue] = useState();
    const [showCommentTextBox, setShowCommentTextBox] = useState(false);

    const handleStarClick = (event) => {
        event.preventDefault();
        const newValue = event.target.id;
        setValue(parseInt(newValue));
        setAnswer(question.text, newValue);
        setShowCommentTextBox(true);
    }

    const handleAddCommentButton = () => {
        setShowCommentTextBox(true);
    }

    return (
        <div className='Range-question-container'>
            <div className='Question-container-header'>
                <p className='Question-number'>{index + 1} of {array.length}</p>
                <p className='Question-category'>{question.type}</p>
            </div>
            <Form.Label className='Range-question-label'>{question.text}</Form.Label>
            <div className='Range-question-stars-container'>
                {Array.from({ length: 10 }).map((v, index) => {
                    return (
                        <StarContainer key={`${question.type}-${index}`} checked={value === index} value={index} handleClick={handleStarClick} />
                    );
                })}
            </div>
            <div className='Question-labels'>
                <p>Disagree</p>
                <p>Agree</p>
            </div>
            {showCommentTextBox ?
                <Form.Control placeholder={`Anything to add for ${question.type}?`} className='Comment-text-box' as="textarea" aria-label="With textarea" onChange={(event) => setText(event.target.value, question.type)} /> :
                <Button variant='link' onClick={handleAddCommentButton} >Add comment</Button>}
        </div>
    );
}

export default RangeQuestionContainer;