import Link from "next/link";
import React from "react";
import Button from "../atoms/button";
import { BiSolidShow } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function UserActionButton({ id }) {
  return (
    <div className="flex items-center text-xl gap-4">
      <Link href={`/users/${id}`}>
        <Button>
          <BiSolidShow />
        </Button>
      </Link>
      <Link href={`/users/edit/${id}`}>
        <Button color="green">
          <FaEdit />
        </Button>
      </Link>
        <Button color="red">
          <MdDeleteForever />
        </Button>
    </div>
  );
}
