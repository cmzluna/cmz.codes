import Head from "next/head";
import { useState } from "react";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Button>Hello!</Button>
    </div>
  );
}
