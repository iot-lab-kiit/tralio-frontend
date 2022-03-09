import React from 'react'

function PostByUser(props) {
  return (
    <div>Hello {props.posts}</div>
  )
}

export async function getStaticPaths() {
    // const paths = await fetch('https://jsonplaceholder.typicode.com/users')
    // const users = await paths.json()
    // const pathsUsers = users.map(user => ({
    //     params: {
    //         user: user.id
    //     }
    // }))
    const paths = [
        {
            params: {
                user: 'user-1'
            },
        },
        {
            params: {
                user: 'user-2'
            },
        },
        {
            params: {
                user: 'user-3'
            },
        },
    ]
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps() {
   

    return {
        props: {
            posts: "Testing user posts",
        },
    };
}

export default PostByUser