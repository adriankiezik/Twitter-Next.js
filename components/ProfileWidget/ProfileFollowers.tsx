import React from "react";

const ProfileFollowers: React.FC = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="p-2">
        <h2 className="text-lg">6,664</h2>
        <p className="text-gray-400">Following</p>
      </div>
      <div className="p-2">
        <h2 className="text-lg">9,991</h2>
        <p className="text-gray-400">Followers</p>
      </div>
    </div>
  );
};

export default ProfileFollowers;
