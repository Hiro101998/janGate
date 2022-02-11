import { FC, memo, useRef } from "react";
import {
  getAuth,
  EmailAuthProvider,
  // FacebookAuthProvider,
  GoogleAuthProvider,
  //   TwitterAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "firebaseui";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import "../../utils/firebase/init"; // Initialize FirebaseApp
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Stack,
} from "@chakra-ui/react";
import Router from "next/router";

const uiConfig: auth.Config = {
  signInFlow: "popup",
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    // FacebookAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
    // TwitterAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "test",
};

const SignInForm: FC = () => {
  return <StyledFirebaseAuth firebaseAuth={getAuth()} uiConfig={uiConfig} />;
};
export default memo(SignInForm);
