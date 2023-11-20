import React from "react";
import FormUser from "@/app/_components/organisms/formUser";
import UserList from "@/app/_components/organisms/userList";
import { getAllUsers } from "@/app/_services";
import LoadMore from "@/app/_components/organisms/loadMore";

export default async function Page() {
  const users = await getAllUsers(1);
  return (
    <div>
      <FormUser />
      <div className="min-h-[25vh] px-24 py-8">
        <h1 className="text-2xl font-bold text-center">List Users</h1>
        <UserList users={users} />
        <LoadMore type="users" />
      </div>
    </div>
  );
}
