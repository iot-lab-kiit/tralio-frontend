import React from 'react'

function PostPage(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
  )
}

export default PostPage;