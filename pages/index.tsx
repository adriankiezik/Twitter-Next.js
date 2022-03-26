import styles from "../styles/pages/Home.module.scss";

import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

import Navbar from "../components/Navbar";

const HomePage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home / Twitter</title>
      </Head>
      <Navbar username="Adrian Kiezik" />
    </React.Fragment>
  );
};

export default HomePage;
