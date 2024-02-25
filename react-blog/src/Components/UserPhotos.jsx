
import '../Styles/UserPhotos.css';
import NavB from './NavB';
import { useState } from "react";

function UserPhotos(){
    
    const [data, setData] = useState(Array.from({length:20}))

    return(
        <div className="parent-photos">
            <NavB hide={true}/>
            <div className="photos-child">
                hello
            </div>
        </div>
    );
}

export default UserPhotos;