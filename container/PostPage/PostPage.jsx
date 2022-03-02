import React from "react";
import Post from "../../components/Post/Post";

function PostPage(props) {
    const { posts } = props;

    function createPost(post) {
        return (
            <Post
                key={post._id}
                title={post.title}
                content={post.content}
            />
        );
    }
    return <div>{posts.map(createPost)}</div>;
}

export default PostPage;
