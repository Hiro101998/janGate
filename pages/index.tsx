import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

import { getApp, FirebaseApp } from "firebase/app";
import "../utils/firebase/init"; // Initialize FirebaseApp

import { SignInForm } from "../components/SignInForm";
import { SignInOrOutButton } from "../components/SignInOrOutButton";

const Home: NextPage = () => {
  const app: FirebaseApp = getApp();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SignInForm />
        <SignInOrOutButton />
        <ul>
          <li>name = {app.name}</li>
          <li>appId = {app.options.appId}</li>
          <li>apiKey = {app.options.apiKey}</li>
        </ul>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
