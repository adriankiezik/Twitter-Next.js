import React from "react";
import Image from "next/image";

const MessagesButton = () => {
  return (
    <Image
      src="/images/message.svg"
      width={30}
      height={30}
      className="scale-90 cursor-pointer"
      alt="Messages"
    />
  );
};

export default MessagesButton;
