import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="1" relative="path">
            Blog Post 1
          </Link>
        </li>
        <li>
          <Link to="2" relative="path">
            Blog Post 2
          </Link>
        </li>
        <li>
          <Link to="3" relative="path">
            Blog Post 3
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Blog;
