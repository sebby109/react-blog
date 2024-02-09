import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import PostBox from './PostBox';
import '../Styles/UserFeed.css';

function UserFeed(){
    const [data, setData] = useState(Array.from({length:20}))

    return(
        <div className="infinite-div"> 
            <InfiniteScroll dataLength={data.length} >
                {data.map(
                    (item, index) => {
                        return(
                            <PostBox />
                        )
                    }
                )}
            </InfiniteScroll>
        </div>
    );
}

export default UserFeed;