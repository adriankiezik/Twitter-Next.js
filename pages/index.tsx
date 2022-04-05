import styles from "../styles/pages/Home.module.scss";

import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

import Navbar from "../components/Navbar";
import ProfileWidget from "../components/ProfileWidget";
import FollowWidget from "../components/FollowWidget";
import CreatePostWidget from "../components/CreatePostWidget";
import Post from "../components/Post";
import TrendsWidget from "../components/TrendsWidget";

const HomePage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home / Social Network</title>
      </Head>
      <Navbar />
      <main className="grid w-full grid-cols-[350px_auto_350px] gap-5 px-14">
        <div className=" h-fit sticky top-24">
          <ProfileWidget />
          <FollowWidget />
        </div>
        <div className="min-h-screen">
          <CreatePostWidget />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="min-h-screen">
          <TrendsWidget />
        </div>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
