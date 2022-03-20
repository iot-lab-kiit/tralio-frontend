
import Post from "../../components/Post/Post";

function PostPage(props) {
    const { posts } = props;

    const createPost = (post) => {
        return (
            <Post key={post._id} title={post.title} content={post.content} />
        );
    };
    return <div>{posts.map(createPost)}</div>;
}

export default PostPage;
