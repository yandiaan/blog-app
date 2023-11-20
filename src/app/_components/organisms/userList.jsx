import React from "react";
import UserInfo from "../molecules/userInfo";
import UserActionButton from "../molecules/userActionButton";

export default function UserList({ users }) {
  return (
    <div className="divide-y-2 flex flex-col">
      {users.map(({ id, name, email, status }, key) => (
        <div key={key} className="flex justify-between mx-4 py-4">
          <UserInfo id={id} name={name} email={email} status={status} />
          <UserActionButton id={id} />
        </div>
      ))}
    </div>
  );
}
