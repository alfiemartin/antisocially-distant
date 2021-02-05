import React, { ReactChild } from "react";
import Head from "next/head";

const Template = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Socially Distant</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {children}
    </div>
  );
};

export default Template;
