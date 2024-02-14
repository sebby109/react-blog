import NavB from "./NavB";
import HomePageSlots from "./HomePageSlots";
import UserFeed from './UserFeed';
import ProfileData from "./ProfileData";

function UserProfile(){

    return(
        <div>
            <NavB />
            <HomePageSlots />
            <ProfileData />
            <UserFeed />
        </div>
    );
}

export default UserProfile;