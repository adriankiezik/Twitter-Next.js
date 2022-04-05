import React from "react";

import Image from "next/image";
import Link from "next/link";

const FollowRecommendation: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <Image
        src="/images/avatar.png"
        width={50}
        height={50}
        className="rounded-full"
        alt="Avatar"
      />
      <div className="h-full translate-y-1 w-36">
        <h1 className="font-semibold text-white text-ellipsis overflow-hidden whitespace-nowrap">
          Some Username
        </h1>
        <h3 className="text-slate-400 text-ellipsis overflow-hidden whitespace-nowrap">
          @someusertag
        </h3>
      </div>
      <Link href="/">
        <a
          className="text-black font-semibold bg-white rounded-full cursor-pointer px-4 py-2
        text-sm"
        >
          Follow
        </a>
      </Link>
    </div>
  );
};

export default FollowRecommendation;
