import React from "react";
import TopTag from "../../props/profile/TopTag";

type Props = {};

const Activity = (props: Props) => {
  return (
    <div>
      <div className="border-b-2 px-10 py-2 border-color-light">
        <p className="text-white font-semibold">Activity</p>
      </div>

      {/* top tags */}
      <div className="mx-10 my-5">
        <p>Top tags by reading days</p>
        <TopTag tech="javascript" percent={50} />
        <TopTag tech="react" percent={44} />
        <TopTag tech="github" percent={31} />
        <TopTag tech="css" percent={25} />
        <TopTag tech="tailwind-css" percent={25} />
        <TopTag tech="tools" percent={25} />
      </div>
    </div>
  );
};

export default Activity;
