import React from "react";

interface Props {
  tech: string;
  percent: number;
}

const TopTag = (props: Props) => {
  const Style = {
    width: `${props.percent}%`,
  };
  return (
    <div className="h-full border border-color-light w-2/3 my-3 rounded-2xl p-3">
      <div className="flex justify-between">
        <p>#{props.tech}</p>
        <p className="text-white">{props.percent}%</p>
      </div>
      <div style={Style} className="h-[5px] bg-white mt-1"></div>
    </div>
  );
};

export default TopTag;
