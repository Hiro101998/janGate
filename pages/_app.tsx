// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider, useAuthContext } from "../context/AuthProdiver";
// import { LoginUserProvider } from "../providers/LoginUserProvider";
import "../utils/firebase/init"; // Initialize FirebaseApp

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
