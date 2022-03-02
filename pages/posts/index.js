import getConfig from "next/config";
import PostPage from "../../container/PostPage/PostPage";

function Posts(props) {
    const posts = props.posts.allPost;

    return (
        <div>
            <PostPage posts={posts} />
        </div>
    );
}

export async function getStaticProps() {
    const { publicRuntimeConfig } = getConfig();
    const { API_URL, apiVersion } = publicRuntimeConfig;

    const data = await fetch(
        `${API_URL}/api/${apiVersion}/posts/all-posts`
    ).then((res) => res.json());

    return {
        props: {
            posts: data,
        },
    };
}

export default Posts;
