import { Link, useParams } from "react-router-dom"

const PostPage = ({posts, handleDelete}) => {
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id)
  return (
    <main className="PostPage">
    <article className="post">
      {
        post && 
        
        <>
        <h2>{post.title}</h2>
        <p className="PostDate">{post.dateTime}</p>
        <p className="PostBody">{post.body}</p>
        <button onClick={() => handleDelete(post.id)}>
        Delete Post
        </button>
        </>
      }
    </article>
    </main>
  )
}

export default PostPage


