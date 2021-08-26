import { Link, routes } from '@redwoodjs/router'
const BlogPost = ({ post }) => {
  return (
    <ul>
      <li key={post.id}> {post.id} </li>
      <li key={post.id}>
        {' '}
        <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>{' '}
      </li>
      <li key={post.id}> {post.body} </li>
      <li key={post.id}> {post.createdAt} </li>
    </ul>
  )
}

export default BlogPost
