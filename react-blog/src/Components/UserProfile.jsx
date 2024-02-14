import NavB from "./NavB";
import HomePageSlots from "./HomePageSlots";
import UserFeed from './UserFeed';
import FriendsList from "./FriendsList";

function UserProfile(){

    return(
        <div>
            <NavB />
            <HomePageSlots />
            <FriendsList />
            <UserFeed />
        </div>
    );
}

export default UserProfile;