import React from "react";
import BlogCard from "@/app/_components/molecules/blogCard";

export default function BlogList({ posts }) {
    
  return (
    <>
      {posts.map(({ id, author, commentCount, title, body }, key) => (
        <BlogCard
          key={key}
          id={id}
          commentCount={commentCount}
          author={author}
          title={title}
          body={body}
        />
      ))}
    </>
  );
}
