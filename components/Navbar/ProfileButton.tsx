import React from "react";
import Image from "next/image";

interface ProfileProps {
  username: string;
}

const ProfileButton: React.FC<ProfileProps> = ({ username }) => {
  return (
    <div
      className="flex justify-between items-center h-[46px] gap-4 mr-14 bg-background 
        leading-[48px] text-[#e1ebf3] rounded-full cursor-pointer px-2"
    >
      <Image
        src="/images/avatar.png"
        width={35}
        height={35}
        className="rounded-full"
        alt="Avatar"
      />
      <span className="text-[15px] font-semibold">{username}</span>
      <Image
        src="/images/dropdown.svg"
        width={40}
        height={30}
        className="scale-[40%] translate-y-[1px]"
        alt="open menu"
      />
    </div>
  );
};

export default ProfileButton;
