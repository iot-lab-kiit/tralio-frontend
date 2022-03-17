import React from "react";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL, apiVersion } = publicRuntimeConfig;

function PostByUser(props) {
  return (
    <>
      <div>Hello</div>
      <h1>{props.posts}</h1>
    </>
  );
}

export async function getStaticPaths() {

  const response = await fetch(`${API_URL}/api/${apiVersion}/users/all-users`);

  const userData = await response.json();
  const paths = userData.users;

  const pathsUsers = paths.map((user) => ({
    params: {
      user: user.username,
    },
  }));

  return {
    paths: pathsUsers,
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      posts: "Successfull Testing user posts",
    },
  };
}

export default PostByUser;
