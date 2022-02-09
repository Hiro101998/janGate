import { FC } from "react";
import Router from "next/router";
import { getAuth, signOut } from "firebase/auth";
import { useLoginUser } from "../hooks/useLoginUser";
import "../utils/firebase/init"; // Initialize FirebaseApp

export const SignInOrOutButton: FC = () => {
  const { AuthState } = useLoginUser();

  if (AuthState?.isSignedIn) {
    return (
      <button onClick={() => signOut(getAuth())}>{AuthState?.userId}</button>
    );
  } else {
    return <button onClick={() => Router.push("/signin")}>Sign-in</button>;
  }
};
