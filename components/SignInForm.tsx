import { FC, useRef } from "react";
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

import "../utils/firebase/init"; // Initialize FirebaseApp
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

export const SignInForm: FC = () => {
  const auth = getAuth();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password, name } = event.target.elements;
    if (name.value == "") {
      alert("ユーザー名を入力してください");
    } else {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(() => Router.push("test"))
        .catch((error) => {
          console.log(error.code);
          // alert(error);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack m={4}>
          <FormControl>
            <FormLabel htmlFor="name">ユーザー名</FormLabel>
            <Input id="name" type="text" ref={nameRef} mb={7} />
            <FormLabel htmlFor="password">メールアドレス</FormLabel>
            <Input id="email" type="email" ref={emailRef} mb={7} />
            <FormLabel htmlFor="password">パスワード（6文字以上）</FormLabel>
            <Input id="password" type="password" ref={passwordRef} mb={7} />
          </FormControl>
          <Button type="submit" bg={"blue.200"} color={"white"}>
            新規登録
          </Button>
        </Stack>
      </form>
      <Text align={"center"} mt={10} mb={10}>
        ----既にアカウントをお持ちの方----
        <br />
        （Googleアカウントでも登録できます。）
        <br />
      </Text>
      <StyledFirebaseAuth firebaseAuth={getAuth()} uiConfig={uiConfig} />
    </>
  );
};
