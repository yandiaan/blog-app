import React from "react";
import cx from "classnames";

export default function Hero() {
  return (
    <div className="bg-orange-600 h-[65vh] pt-28 px-24 text-white">
      <div className="container flex flex-col text-center w-2/3 mx-auto gap-4">
        <h1 className="text-5xl">Read Our Latest <span className="font-bold">Blogs.</span></h1>
        <p>
          Welcome to our blog where we explore the latest trends, share
          insights, and dive into the fascinating world of knowledge. Join us on
          a journey of discovery as we unravel stories that inspire and
          captivate. Get ready to embark on a reading adventure with our diverse
          range of articles. Happy reading!
        </p>
      </div>
    </div>
  );
}
