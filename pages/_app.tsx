// import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { AuthProvider, useAuthContext } from "../context/AuthProdiver";
// import { LoginUserProvider } from "../providers/LoginUserProvider";
import "../utils/firebase/init"; // Initialize FirebaseApp

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
