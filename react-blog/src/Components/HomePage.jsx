import Container from 'react-bootstrap/Container';
import '../Styles/Home.css';
import HomePageSlots from './HomePageSlots';
import PostBox from './PostBox';

function HomePage(){

    return(
        <Container fluid className='home-container'>
           <HomePageSlots />
        </Container>
    );
}

export default HomePage;