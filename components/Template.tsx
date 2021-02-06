import React, { ReactChild } from "react";
import Head from "next/head";

interface Props {
  children: ReactChild;
  title: string;
}

const Template = ({ children, title }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {children}
    </div>
  );
};

export default Template;
