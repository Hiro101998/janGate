import {
  useEffect,
  useState,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "../utils/firebase/init"; // Initialize FirebaseApp

//useAuthState フックの戻り値の型
export type AuthStateType = {
  isSignedIn: boolean;
  isLoading: boolean;
  userId: string | undefined;
  userName: string | undefined;
  avatarUrl: string | undefined;
};

export type AuthContextType = {
  AuthState: AuthStateType | null;
  setAuthState: Dispatch<SetStateAction<AuthStateType>>;
};

/**
 * useAuthState が返す初期値。
 * Next.js のサーバーサイドレンダリング時もこの値になる。
 */
const INITIAL_AUTH_STATE: AuthStateType = {
  isSignedIn: false,
  isLoading: true,
  userId: undefined,
  userName: undefined,
  avatarUrl: undefined,
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function useAuthContext() {
  return useContext(AuthContext);
}

//ユーザーのサインインの状態を監視するカスタムフック
export const AuthProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [AuthState, setAuthState] = useState(INITIAL_AUTH_STATE);

  // サインイン状態の変化を監視する
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setAuthState({
          isSignedIn: true,
          isLoading: false,
          userId: user.uid,
          userName: user.displayName || undefined,
          avatarUrl: user.photoURL || undefined,
        });
      } else {
        setAuthState({ ...INITIAL_AUTH_STATE, isLoading: false });
      }
    });
    return () => unsubscribe();
  }, []);
  const value = {
    AuthState,
  };
  return (
    <AuthContext.Provider value={{ AuthState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
