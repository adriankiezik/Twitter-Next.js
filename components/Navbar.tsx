import React from "react";

import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-24">
      <div className="h-full flex items-center gap-6 ml-14">
        <Image
          src="/images/twitter.svg"
          width={45}
          height={45}
          className="cursor-pointer"
        />
        <div className="absolute left-[135px] top-[31px]">
          <Image
            src="/images/hashtag.svg"
            width={35}
            height={35}
            className="scale-[60%]"
          />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Explore"
          spellCheck={false}
          className="h-[46px] w-80 bg-background rounded-xl focus:outline-none 
            focus:outline-offset-0 focus:outline-1 focus:outline-primary pl-12 text-white 
            placeholder:text-[#a9a9a9] placeholder:text-[16px]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
