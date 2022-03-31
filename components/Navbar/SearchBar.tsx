import React from "react";
import Image from "next/image";

const SearchBar = () => {
  return (
    <React.Fragment>
      <div className="h-full flex items-center gap-6 ml-14 mr-auto">
        <div className="absolute left-[67px] top-[31px]">
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
    </React.Fragment>
  );
};

export default SearchBar;
