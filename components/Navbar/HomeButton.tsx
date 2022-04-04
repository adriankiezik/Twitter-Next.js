import React from "react";
import Image from "next/image";

const HomeButton = () => {
  return (
    <div
      className="flex items-center justify-evenly gap-2 bg-[#c5d6e4] rounded-full px-4 
      h-[46px] cursor-pointer"
    >
      <Image
        src="/images/home.svg"
        width={30}
        height={30}
        className="scale-[80%]"
      />
      <span className="translate-y-[1px] font-medium">Home</span>
    </div>
  );
};

export default HomeButton;
