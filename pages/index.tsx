import styles from "../styles/pages/Home.module.scss";

import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

import Navbar from "../components/Navbar";

const HomePage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home / Social Network</title>
      </Head>
      <Navbar />
    </React.Fragment>
  );
};

export default HomePage;
