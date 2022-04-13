import getConfig from "next/config";
import PostPage from "../../container/PostPage/PostPage";
const { publicRuntimeConfig } = getConfig();
const { API_URL, apiVersion } = publicRuntimeConfig;
import { Box } from "@mui/material";
function Posts(props) {
    const posts = props.posts.allPost;

    return (
        <div>
            <Box mt={8} />
            <PostPage posts={posts} />
        </div>
    );
}

export async function getStaticProps() {

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