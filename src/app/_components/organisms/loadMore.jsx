"use client";
import React, { useState, useEffect } from "react";
import BlogList from "./blogList";
import UserList from "./userList";
import Spinner from "../atoms/spinner";
import { useInView } from "react-intersection-observer";
import { getAllUsers, getPostsPerPage } from "@/app/_services";

export default function LoadMore({ type }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const loadMorePosts = async () => {
    const nextPage = page + 1;
    const nextData = (await getPostsPerPage(nextPage)) ?? [];
    setData([...data, ...nextData]);
    setPage(nextPage);
  };

  const loadMoreUsers = async () => {
    const nextPage = page + 1;
    const nextData = (await getAllUsers(nextPage)) ?? [];
    setData([...data, ...nextData]);
    setPage(nextPage);
  };

  useEffect(() => {
    if (inView) {
      type === "posts" ? loadMorePosts() : loadMoreUsers();
    }
  }, [inView]);
  return (
    <>
      {type === "posts" ? <BlogList posts={data} /> : <UserList users={data} />}
      <div ref={ref} className="col-span-2">
        <Spinner />
      </div>
    </>
  );
}
