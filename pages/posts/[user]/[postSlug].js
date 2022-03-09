import { useRouter } from "next/router";

const Post = (props) => {
    const router = useRouter()
    const {postSlug} = router.query
    return (
        <div>
            <h1>Post</h1>
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
            post: data,
        }
    }
}

export default Post
