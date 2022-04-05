import React from "react";

import Image from "next/image";

const ProfileAvatar: React.FC = () => {
  return (
    <div className="absolute left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <Image
        src="/images/avatar.png"
        width={100}
        height={100}
        objectPosition=""
        className="rounded-full"
        alt="Avatar"
      />
    </div>
  );
};

export default ProfileAvatar;
