import React from "react";

// icons import
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbArrowBigUpLine } from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";
import { TbExternalLink } from "react-icons/tb";
import { FaShare } from "react-icons/fa";

interface Props {
  sourceLogo: string;
  postTitle: string;
  postDate: string;
  readTime: string;
  postImage: string;
}

const Post = (props: Props) => {
  return (
    <div className="border border-color rounded-xl p-2 hover-border">
      {/* menu */}
      <div className="flex justify-between items-center p-3">
        <img
          src={props.sourceLogo}
          alt="developer logo"
          className="h-8 rounded-full cursor-pointer"
        />
        <div className="flex items-center space-x-5">
          <button className="flex items-center gap-1 bg-white color-dark font-bold px-2 py-1 rounded-lg">
            <p>Read post</p>
            <TbExternalLink className="text-xl" />
          </button>
          <BsThreeDotsVertical className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* title of post */}
      <div className="space-y-2 p-3">
        <p className="text-white text-xl font-semibold">{props.postTitle}</p>
        <p className="text-xs">
          {props.postDate} • {props.readTime}m read time
        </p>
      </div>

      {/* main section of post */}
      <div className="mt-10">
        <img src={props.postImage} alt="the post" className="rounded-xl" />
      </div>

      {/* user interaction section */}
      <div className="flex justify-between p-3">
        <div className="hover-bg-green px-2 py-1 rounded-2xl cursor-pointer hover-color-green">
          <TbArrowBigUpLine className="text-2xl" />
        </div>
        <div className="hover-bg-blue px-2 py-1 rounded-xl cursor-pointer hover-color-blue">
          <BiCommentDetail className="text-2xl" />
        </div>
        <div className="hover-bg-pink px-2 py-1 rounded-xl cursor-pointer hover-color-pink">
          <FaShare className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Post;
