import CommentCount from "@/app/_components/atoms/commentCount";
import BlogDetail from "@/app/_components/molecules/blogDetail";
import CommentList from "@/app/_components/organisms/commentList";
import { getComments, getPostById, getUser } from "@/app/_services";
import React from "react";

export default async function Page({ params }) {
  const { user_id, title, body } = await getPostById(params.id);
  const comments = await getComments(params.id);
  const user = await getUser(user_id);
  return (
    <>
      <div className="container mx-auto px-24 bg-orange-600 dark:bg-cyan-950 pt-28">
        <BlogDetail title={title} user={user} body={body} />
      </div>
      <div className="min-h-[50vh] px-24 mt-6">
        <CommentCount count={comments.length} />
        <CommentList comments={comments} />
      </div>
    </>
  );
}
