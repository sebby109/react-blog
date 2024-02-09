import Container from 'react-bootstrap/Container';
import '../Styles/Home.css';
import HomePageSlots from './HomePageSlots';
import UserFeed from './UserFeed';
import Navb from '../Components/NavB';

function HomePage(){

    return(
        <Container fluid className='home-container'>
            <Navb />
           <HomePageSlots />
           <UserFeed />
        </Container>
    );
}

export default HomePage;