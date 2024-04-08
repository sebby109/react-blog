import '../Styles/HomePageSlots.css';
import { Image } from 'react-bootstrap';
import generic from '../Images/icons8-male-user-94.png';
import post from '../Images/icons8-post-68.png';
import Spinner from 'react-bootstrap/Spinner';

function HomePageSlots(props){
    const uData = props.userData;

    function handleUpload () {
        let profilepic = document.getElementById("profile-pic");
        let inputfile = document.getElementById("input-file");

        // gets uploaded image and creates/updates the image url
        profilepic.src = URL.createObjectURL(inputfile.files[0]);
    }

    // save for updating in profile settings, this updates profile pic
    //                <label for="input-file" >Update Image</label>
    //<input type='file' accept='image/jpeg. image/png, image/jpg' id="input-file" onChange={handleUpload}/>
    return (


<div className="parent">
            <div className='card'>
                hello
                <Image src={generic} id="profile-pic" />
            </div>
            
            <div className='post'>
                <Image src={post} /> 
                <br />
                <textarea type='text' id='input-text' />
            </div>
        </div>


    );
}
export default HomePageSlots;