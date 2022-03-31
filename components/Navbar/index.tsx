import React from "react";

import SearchBar from "./SearchBar";
import HomeButton from "./HomeButton";
import MessagesButton from "./MessagesButton";
import NotificationsButton from "./NotificationsButton";
import ProfileButton from "./ProfileButton";

const Navbar: React.FC = () => {
  return (
    <nav className="flex w-full h-24 items-center gap-12">
      <SearchBar />
      <HomeButton />
      <MessagesButton />
      <NotificationsButton />
      <ProfileButton username="Adrian Kiezik" />
    </nav>
  );
};

export default Navbar;
