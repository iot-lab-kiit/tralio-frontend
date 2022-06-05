import { useRouter } from "next/router";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL, apiVersion } = publicRuntimeConfig;

const Post = (props) => {
    const router = useRouter()
    const {postSlug} = router.query
    return (
        <div>
            <h1>Post</h1>
            <p>Slug</p>
            <p>post</p>
        </div>
    );
};

export default Post
