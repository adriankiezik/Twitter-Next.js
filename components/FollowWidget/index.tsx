import React from "react";

import FollowRecommendation from "./FollowRecommendation";

const FollowWidget: React.FC = () => {
  return (
    <div className="w-full bg-background_light mt-4 rounded-3xl grid gap-8 px-6 pt-4">
      <h2 className="text-white text-lg font-medium">Who is to follow</h2>
      <FollowRecommendation />
      <FollowRecommendation />
      <FollowRecommendation />
      <h3 className="text-primary pb-4">
        <a href="/">Show more</a>
      </h3>
    </div>
  );
};

export default FollowWidget;
