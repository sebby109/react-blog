import generic from '../Images/icons8-male-user-94.png';
import { Image } from 'react-bootstrap';
import '../Styles/ProfileData.css';

/**
 * Profile Data for the logged in User, not data for looking
 * at other users profiles.
 * 
 * Has users friends, users data,
 * and users photos/ blog posts.
 * 
 */
function ProfileData(){

    return (
        <div className='friends-list-parent'>
            <div className='friends-child-1'>
                <h4>users personal data</h4>
            </div>
            <div className='friends-child-2'>
                <h4>photos</h4>
            </div>
            <div className='friends-child-3' >
            <h4>Friends</h4>
            <div className='friend-number'>100</div>
                <Image src={generic} className='img-1'/>
                <Image src={generic} className='img-2'/>
                <Image src={generic} className='img-3'/>
            </div>
        </div>
    );

}

export default ProfileData;