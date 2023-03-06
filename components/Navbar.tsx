import { useState } from "react";
import Link from "next/link";

// NextAuth
import { signOut, useSession } from "next-auth/react";

// icons imports
import {
  HiFire,
  HiMenuAlt2,
  HiOutlineLogout,
  HiOutlinePause,
  HiUser,
  HiUsers,
} from "react-icons/hi";
import { IoIdCardOutline, IoSettingsOutline } from "react-icons/io5";
import { TbArrowBigUpLine } from "react-icons/tb";
import { BiBookContent, BiCommentDetail } from "react-icons/bi";
import { FaEye, FaLink } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { MdFeedback } from "react-icons/md";

// local imports
import SidebarProps from "../props/SidebarProps";
import { BsTerminalFill } from "react-icons/bs";

type Props = {};

const Navbar = (props: Props) => {
  const { data: session } = useSession();

  // mobile menu state
  const [mobMenu, setMobMenu] = useState(false);

  const handleMobMenu = () => {
    setMobMenu(true);

    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeMobMenu = () => {
    setMobMenu(false);
    document.body.style.overflow = "unset";
  };

  // profile dropdown state
  let toggle = false;
  const [profileDropdown, setProfileDropdown] = useState(toggle);

  const handleProfileDropdown = () => {
    toggle = !toggle;
    setProfileDropdown(toggle);

    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <nav className="p-2 flex justify-between items-center border-b border-color">
      <button
        className="hover-color px-2 py-1 rounded-xl"
        onClick={handleMobMenu}
      >
        <HiMenuAlt2 className="text-3xl" />
      </button>

      <Link href="/">
        <div className="flex space-x-2 items-center">
          <img src="/logo.png" alt="logo" className="rounded-full h-11 w-11" />
          <h1>Techlog</h1>
        </div>
      </Link>
      <button
        className="hover-color px-2 py-1 rounded-xl"
        onClick={handleProfileDropdown}
      >
        <img src={session?.user?.image} className="h-9 rounded-lg" />
      </button>

      {/* profile dropdown */}
      <div
        className={
          profileDropdown
            ? `py-5 bg-white absolute right-5 top-16 bg-secondary rounded-xl border-color-light border-2`
            : `hidden`
        }
      >
        <Link href="../../profile">
          <div className="py-2 hover-bg px-10 cursor-pointer flex space-x-3 text-sm items-center">
            <HiUser className="text-lg" />
            <p>Profile</p>
          </div>
        </Link>
        <div className="py-2 hover-bg px-10 cursor-pointer flex space-x-3 text-sm items-center">
          <IoSettingsOutline className="text-lg" />
          <p>Account Details</p>
        </div>
        <div className="py-2 hover-bg px-10 cursor-pointer flex space-x-3 text-sm items-center">
          <IoIdCardOutline className="text-lg" />
          <p>Dev card</p>
        </div>
        <div
          className="py-2 hover-bg px-10 cursor-pointer flex space-x-3 text-sm items-center"
          onClick={signOut}
        >
          <HiOutlineLogout className="text-lg" />
          <button>Log out</button>
        </div>
      </div>

      {/* side menu */}
      <div
        className={
          mobMenu
            ? `h-screen top-0 lg:hidden left-0 flex absolute z-50 w-full transform transition-all ease-in-out duration-300`
            : `hidden`
        }
      >
        <div className="w-2/3 bg-primary">
          <div className="flex items-center justify-between m-10">
            <img
              src={session?.user?.image}
              alt="user avatar"
              className="w-10 rounded-xl"
            />
          </div>
          <div className="mx-10">
            <p className="text-white font-semibold">{session?.user?.name}</p>
            <p className="text-xs">{session?.user?.email}</p>
          </div>

          {/* sidebar menu items */}
          <div className="my-5">
            <div className="flex py-2 hover-bg items-center cursor-pointer px-10 space-x-3 text-[15px] hover:text-white">
              <img
                src="https://avatars.githubusercontent.com/u/83148458?v=4"
                alt="user avatar"
                className="w-5 h-5 rounded-md items-center"
              />
              <p>My feed</p>
            </div>
            <SidebarProps Icon={HiFire} title="Popular" />
            <SidebarProps Icon={TbArrowBigUpLine} title="Most upvoted" />
            <SidebarProps Icon={BiCommentDetail} title="Best discussions" />
            <SidebarProps Icon={FaLink} title="Submit link" />
            <SidebarProps Icon={FiCode} title="Suggest new source" />
            <SidebarProps Icon={FaEye} title="Reading history" />
            <SidebarProps Icon={HiOutlinePause} title="Pause new tab" />
            <SidebarProps Icon={IoSettingsOutline} title="Customize" />
          </div>

          {/* lower list items of sidebar */}
          <div className="flex-1 w-full my-8">
            <SidebarProps Icon={BiBookContent} title="Docs" />
            <SidebarProps Icon={BsTerminalFill} title="Changelog" />
            <SidebarProps Icon={MdFeedback} title="Feedback" />
            <SidebarProps Icon={HiUsers} title="Invite People" />
          </div>
        </div>
        <div className="w-1/3 bg-white opacity-30" onClick={closeMobMenu}></div>
      </div>
    </nav>
  );
};

export default Navbar;
