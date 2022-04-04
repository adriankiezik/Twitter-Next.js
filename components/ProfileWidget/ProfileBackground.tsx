import React from "react";

import Image from "next/image";

const ProfileBackground: React.FC = () => {
  return (
    <Image
      layout="responsive"
      objectFit="cover"
      src="/images/background.jpg"
      width="100%"
      height="30px"
    />
  );
};

export default ProfileBackground;
