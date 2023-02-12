import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import StarContainer from './StarContainer';

function RangeQuestionContainer(props) {

    const { question, index, array, setAnswer } = props;
    const [value, setValue] = useState();
    const [showCommentTextBox, setShowCommentTextBox] = useState(false);
    const [commentTextBoxValue, setCommentTextBoxValue] = useState('');

    const handleStarClick = (event) => {
        event.preventDefault();
        const newValue = event.target.id;
        setValue(parseInt(newValue));
        setAnswer(index, newValue);
        setShowCommentTextBox(true);
    }

    const handleAddCommentButton = () => {
        setShowCommentTextBox(true);
    }

    return (
        <div className='Range-question-container'>
            <div className='Question-container-header'>
                <p className='Question-number'>{index + 1} of {array.length}</p>
                <p className='Question-category'>Question category</p>
            </div>
            <Form.Label className='Range-question-label'>{question}</Form.Label>
            <div className='Range-question-stars-container'>
                {Array.from({ length: 10 }).map((v, index) => {
                    return (
                        <StarContainer key={`${question}-${index}`} checked={value === index} value={index} handleClick={handleStarClick} />
                    );
                })}
            </div>
            <div className='Question-labels'>
                <p>Disagree</p>
                <p>Agree</p>
            </div>
            {showCommentTextBox ?
                <Form.Control placeholder='Anything to add?' className='Comment-text-box' as="textarea" aria-label="With textarea" onChange={(event) => setCommentTextBoxValue(event.target.value)} /> :
                <Button variant='link' onClick={handleAddCommentButton} >Add comment</Button>}
        </div>
    );
}

export default RangeQuestionContainer;