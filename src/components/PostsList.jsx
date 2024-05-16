import Post from "./Post";
import NewPost from "./NewPost.jsx";

import classes from './PostsList.module.css';

function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author={"Joao"} body={"React.js is awesome!"}/>
                <Post author={"Manuel"} body={"Checkout the full course"}/>
            </ul>
        </>

    )
}

export default PostsList;