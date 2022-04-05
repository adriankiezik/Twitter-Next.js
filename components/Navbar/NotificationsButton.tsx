import styles from "../../styles/components/Navbar/messages-button.module.scss";

import React from "react";
import Image from "next/image";

const NotificationsButton = () => {
  return (
    <div className={`${styles.notification} flex items-center mr-10`}>
      <Image
        src="/images/bell.svg"
        width={30}
        height={30}
        className="cursor-pointer"
        alt="Notifications"
      />
    </div>
  );
};

export default NotificationsButton;
