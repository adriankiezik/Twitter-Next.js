import React from "react";

import SearchBar from "./SearchBar";
import HomeButton from "./HomeButton";
import MessagesButton from "./MessagesButton";
import NotificationsButton from "./NotificationsButton";
import ProfileButton from "./ProfileButton";

const Navbar: React.FC = () => {
  return (
    <nav className="flex w-full h-24 items-center gap-12 sticky top-0 z-10 bg-[#03141c]">
      <SearchBar />
      <HomeButton />
      <MessagesButton />
      <NotificationsButton />
      <ProfileButton username="Adrian Kiezik" />
    </nav>
  );
};

export default Navbar;
