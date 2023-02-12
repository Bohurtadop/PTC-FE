import { Image } from 'react-bootstrap';
import StarIcon from '../assets/StarIcon.svg';

function StarContainer(props) {

    const { value, checked, handleClick } = props;

    return (
        <div className={checked ? 'Star-container-checked' : 'Star-container'}>
            <Image className='Star' id={value} src={StarIcon} onClick={handleClick} />
        </div>
    );
}

export default StarContainer;