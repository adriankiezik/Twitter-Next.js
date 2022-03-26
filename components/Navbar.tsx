import styles from "../styles/components/Navbar.module.scss";

import React from "react";
import Image from "next/image";

interface NavProps {
  username: string;
}

const Navbar: React.FC<NavProps> = ({ username }) => {
  return (
    <nav className="flex w-full h-24 items-center gap-12">
      <div className="h-full flex items-center gap-6 ml-14 mr-auto">
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
      <div
        className="flex items-center justify-evenly gap-2 bg-[#c5d6e4] rounded-full px-4 
            h-[46px] cursor-pointer"
      >
        <Image
          src="/images/home.svg"
          width={30}
          height={30}
          className="scale-[80%] -translate-y-[1px]"
        />
        <span>Home</span>
      </div>
      <Image
        src="/images/message.svg"
        width={30}
        height={30}
        className="scale-90 cursor-pointer"
      />
      <div className={`${styles.notification} flex items-center`}>
        <Image
          src="/images/bell.svg"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </div>
      <span></span>
      <div
        className="flex justify-between items-center h-[46px] gap-4 mr-14 bg-background 
        leading-[48px] text-[#e1ebf3] rounded-full cursor-pointer px-2"
      >
        <Image
          src="/images/avatar.png"
          width={35}
          height={35}
          className="rounded-full"
        />
        <span className="text-[15px] font-semibold">{username}</span>
        <Image
          src="/images/dropdown.svg"
          width={40}
          height={30}
          className="scale-[40%] translate-y-[1px]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
