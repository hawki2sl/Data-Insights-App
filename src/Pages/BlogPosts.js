import { useParams, Link } from "react-router-dom";

const BlogPosts = () => {
  const params = useParams();

  return (
    <>
      <h1>Blog Post</h1>
      {params.postID}
      <p>{""}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
};

export default BlogPosts;
