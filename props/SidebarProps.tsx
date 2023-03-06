import React from "react";

interface Props {
  Icon: any;
  title: string;
}

const SidebarProps = (props: Props) => {
  return (
    <div className="flex items-center space-x-3 hover-bg w-full px-10 cursor-pointer py-2 text-[15px] hover:text-white">
      <props.Icon />
      <p>{props.title}</p>
    </div>
  );
};

export default SidebarProps;
