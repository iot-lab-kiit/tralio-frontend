import getConfig from "next/config";
import PostPage from "../../container/PostPage/PostPage";
import BackgroundSearch from "../../components/Dashboard/BackgroundSearch";
import Box from "@mui/material/Box";
import React from "react";
const { publicRuntimeConfig } = getConfig();
const { API_URL, apiVersion } = publicRuntimeConfig;

function Posts(props) {
    const posts = props.posts.allPost;

    return (
        <>
            <BackgroundSearch head={'This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages'} src={'/backgrounds/dashboardBg1.jpg'} />
            <Box mt={2} textAlign={'center'}>Post page*</Box>
            <Box mt={100}/>
        </>
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
