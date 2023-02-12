import { Form } from 'react-bootstrap';

function ExtraFeedbackContainer(props) {

    const { setText } = props;

    return (
        <div className='Extra-feedback-container'>
            <div className='Extra-feedback-container-header'>
                <p className='Extra-feedback-title'>Anything to add? (Optional)</p>
                <div className='Extra-feedback-seal-container'>
                    <p className='Extra-feedback-seal-text'>Extra feedback helps</p>
                </div>
            </div>
            <Form.Control placeholder='Express yourself freely and safely. This will always remain anonymous.' className='Extra-feedback-text-box' as="textarea" aria-label="With textarea" onChange={event => setText(event.target.value)} />
        </div>
    );
}

export default ExtraFeedbackContainer;