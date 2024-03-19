import Container from 'react-bootstrap/Container';
import '../Styles/Home.css';
import HomePageSlots from './HomePageSlots';
import UserFeed from './UserFeed';
import Navb from '../Components/NavB';
import supabase from '../Communication/supabaseClient';
import { useState, useEffect } from 'react';
import LogIn from '../Communication/LoggedIn';

function HomePage(){
    const [fetchError, setFetchError] = useState(null);
    const [uData, setuData] = useState(null);

    useEffect( () => {
        const fetchUser = async () => {
            const { data, error} = await supabase.from('Users').select('dob, email, gender, profile_pic, user_id, name').eq('user_id', 1);

            if(error) {
                setFetchError("Could not fetch User data");
                setuData(null);
                console.log(error);
            }
            if(data) {
                console.log(uData);
                setuData(data);
                LogIn.setLogged();
                LogIn.setInfo(uData);
                setFetchError(null);
            }
        }
        fetchUser()
    }, []);
    console.log(LogIn.loggedIn);
    return(
        <Container fluid className='home-container'>
            <Navb />
           <HomePageSlots userData={uData} />
           <UserFeed />
        </Container>
    );
}

export default HomePage;