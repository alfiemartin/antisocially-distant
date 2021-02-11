import React, { ReactChild, useEffect } from "react";
import Head from "next/head";

interface Props {
  children: ReactChild;
  title: string;
}

const Template = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0" />
        <meta
          name="description"
          content="Find out how many human interactions you've missed out on in the last year."
        />
        <meta property="og:image" content="Socially-Distant.png" />
        <meta property="og:image:width" content="180" />
        <meta property="og:image:height" content="180" />
        <link rel="icon" href="Socially-Distant.png"></link>
      </Head>
      <main className="main">{children}</main>
    </>
  );
};

export default Template;
