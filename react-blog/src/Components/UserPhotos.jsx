
import '../Styles/UserPhotos.css';
import NavB from './NavB';
import { useState } from "react";
import generic from '../Images/icons8-male-user-94.png';
import { Image } from 'react-bootstrap';

/**
 * hide in the NavB makes it not show the post box used in small screens,
 * that should only appear when their is a feed to post to.
 */
function UserPhotos(){
    const [data, setData] = useState(Array.from({length:20}))

    return(
        <div className="parent-photos">
            <NavB hide={true}/>
            <div className="photos-child">
            {data.map(
                    (item, index) => {
                        return(
                            <div className='photos-children'>
                                Name
                                <Image src={generic} />
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    );
}

export default UserPhotos;