import React from "react";
import Navbar from "../components/Navbar";

// NextAuth imports
import { useSession } from "next-auth/react";
import Activity from "../components/profile/Activity";

type Props = {};

const Profile = (props: Props) => {
  const { data: session } = useSession();
  return (
    <div>
      <Navbar />
      <div className="my-10 mx-8">
        <img
          src={session?.user?.image}
          alt="user logo"
          className="h-24 rounded-3xl"
        />
        <p className="text-xl text-white font-bold my-2">
          {session?.user?.name}
        </p>
        <p className="text-sm my-2">{session?.user?.email}</p>
        <p className="text-xs my-2">Joined April 2022</p>

        <button className="border-primary border mt-10 p-3 rounded-2xl text-white hover-bg hover:font-bold">
          Account details
        </button>
      </div>

      <Activity />
    </div>
  );
};

export default Profile;
