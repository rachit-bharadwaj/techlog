import React from "react";

// icons import
import { BiBookContent } from "react-icons/bi";
import { HiViewGridAdd } from "react-icons/hi";
import Posts from "./Posts";

type Props = {};

const Feed = (props: Props) => {
  return (
    <div className="p-3">
      <div className="flex items-center justify-between">
        <button className="flex gap-2 items-center hover-color px-5 py-3 rounded-2xl">
          <p>My Feed</p>
          <BiBookContent className="text-xl" />
        </button>
        <button className="flex gap-2 items-center hover-color px-5 py-3 rounded-2xl">
          <p>Add shortcuts</p>
          <HiViewGridAdd className="text-xl" />
        </button>
      </div>

      {/* posts */}
      <Posts />
    </div>
  );
};

export default Feed;
