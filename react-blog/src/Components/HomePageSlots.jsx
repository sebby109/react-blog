import '../Styles/HomePageSlots.css';
import { Image } from 'react-bootstrap';
import generic from '../Images/icons8-customer-50.png';
import post from '../Images/icons8-post-68.png';

function HomePageSlots(){
    function handleUpload () {
        let profilepic = document.getElementById("profile-pic");
        let inputfile = document.getElementById("input-file");

        // gets uploaded image and creates/updates the image url
        profilepic.src = URL.createObjectURL(inputfile.files[0]);
    }

    return (
        <div className="parent">
            <div className='card'>
                Name
                <Image src={generic} id="profile-pic" />
                <label for="input-file" >Update Image</label>
                <input type='file' accept='image/jpeg. image/png, image/jpg' id="input-file" onChange={handleUpload}/>
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