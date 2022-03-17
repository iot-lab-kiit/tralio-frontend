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
            <p>{postSlug}</p>
            <p>{props.post}</p>
        </div>
    );
};

export async function getServerSideProps(context) {
    const {user, postSlug} = context.query

    const apiPath = `posts`
    const query = `user=${user}&postSlug=${postSlug}`

    const data = await fetch(
        `${API_URL}/api/${apiVersion}/${apiPath}?${query}`
    ).then((res) => res.json());

    
    return {
        props: {
            post: `Successfull Testing post ${postSlug} by user ${user}`,
        }
    }
}

export default Post
