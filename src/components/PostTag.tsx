import React from "react";

interface Props {
  children: React.ReactNode;
  tagColor: string;
}

const PostTag: React.FC<Props> = ({ children, tagColor}) => {
  return <span className={`inline-flex text-xl text-white font-semibold relative px-3 py-2 mx-3 my-2 rounded-lg ${tagColor} duration-500 ease-in-out hover:scale-105`}>{children}</span>;
};

export default PostTag;
