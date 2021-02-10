import React, { ReactChild, useEffect } from "react";
import Head from "next/head";
import ReactGA from "react-ga";

interface Props {
  children: ReactChild;
  title: string;
}

const Template = ({ children, title }: Props) => {
  useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0" />
      </Head>
      <main className="main">{children}</main>
    </>
  );
};

export default Template;
