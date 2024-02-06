import '../Styles/NavS.css';
import 'bootstrap/dist/css/bootstrap.css';
import home from '../Images/icons8-home-100.png';
import friends from '../Images/icons8-friends-64.png';
import profile from '../Images/icons8-cat-profile-64.png';
import { Image } from 'react-bootstrap';

function NavB(){
    
    return (
      <footer>
        <a href="#"><Image src={home} /></a>
        <a href="#"><Image src={friends} /></a>
        <a href="#"><Image src={profile} /></a>
      </footer>
    );
}

export default NavB;