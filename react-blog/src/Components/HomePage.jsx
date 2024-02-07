import Container from 'react-bootstrap/Container';
import '../Styles/Home.css';
import HomePageSlots from './HomePageSlots';


function HomePage(){

    return(
        <Container fluid id="c">
           <HomePageSlots />
        </Container>
    );
}

export default HomePage;