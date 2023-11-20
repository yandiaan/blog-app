"use client";
import React, { useState, useEffect } from "react";
import BlogList from "./blogList";
import Spinner from "../atoms/spinner";
import { useInView } from "react-intersection-observer";
import { getPostsPerPage } from "@/app/_services";

export default function LoadMore() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  
  const {ref, inView} = useInView();

  const delay = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMorePosts = async () => {
    await delay(1000);
    const nextPage = page + 1;
    const nextPosts = (await getPostsPerPage(nextPage)) ?? [];
    setPosts([...posts, ...nextPosts]);
    setPage(nextPage);
  }

    useEffect(() => {
        if(inView) {
            loadMorePosts();
        }
    }, [inView]);
  return (
    <>
      <BlogList posts={posts} />
      <div ref={ref} className="col-span-2">
        <Spinner />
      </div>
    </>
  );
}
