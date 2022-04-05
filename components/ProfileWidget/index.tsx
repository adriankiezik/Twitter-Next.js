import React from "react";

import Link from "next/link";

import ProfileBackground from "./ProfileBackground";
import ProfileAvatar from "./ProfileAvatar";
import ProfileFollowers from "./ProfileFollowers";

const ProfileWidget: React.FC = () => {
  return (
    <div
      className="w-full rounded-3xl overflow-hidden bg-background text-center text-white
    relative"
    >
      <ProfileBackground />
      <ProfileAvatar />
      <h1 className="font-semibold text-xl mt-16">Adrian Kiezik</h1>
      <h3 className="mt-1 text-slate-400">@adriankiezik</h3>
      <p className="my-5 px-5">Some bio information here.</p>
      <ProfileFollowers />
      <h3 className="text-primary m-5">
        <Link href="/">My Profile</Link>
      </h3>
    </div>
  );
};

export default ProfileWidget;
