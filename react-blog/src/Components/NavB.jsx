import '../Styles/NavS.css';
import 'bootstrap/dist/css/bootstrap.css';
import home from '../Images/icons8-home-100.png';
import friends from '../Images/icons8-friends-64.png';
import profile from '../Images/icons8-cat-profile-64.png';
import { Image } from 'react-bootstrap';
import post from '../Images/icons8-post-68.png';

/**
 * navgation bar for top of pages, also shows a posting box if the screen gets too small
 * the small post box will appear ontop of feed when 1000px or less for smaller screens.
 * @returns 
 */
function NavB(){
    
    return (
      <div className='nav-parent'>
        <header>
          <a href="/"><Image className='img' src={home} /></a>
          <a href="/photos"><Image className='img' src={friends} /></a>
          <a href="/profile"><Image className='img' src={profile} /></a>
        </header>
        <div className='small-search-box'>
            <Image src={post} /> 
                <br />
                <textarea type='text' id='input-text' />
          </div>
      </div>
    );
}

export default NavB;