
import '../Styles/PostBox.css';
import { Image } from 'react-bootstrap';
import generic from '../Images/icons8-customer-50.png';
import heart from '../Images/icons8-heart-64.png';
import comment from '../Images/icons8-comment-64.png';
import repost from '../Images/icons8-repost-64.png';

function PostBox(props) {
    return (
        <div className="post-parent">
                <Image src={generic} /> 
                <Image className='interact-icons' src={repost} />
                <Image className='interact-icons' src={comment} />
                <Image className='interact-icons' src={heart} />
                <textarea type="text" readOnly>
                </textarea>
        </div>
    );
}

export default PostBox;