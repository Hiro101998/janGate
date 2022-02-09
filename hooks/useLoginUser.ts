import { useContext } from "react";
import { AuthContext, AuthContextType } from "../context/AuthProdiver";

export const useLoginUser = (): AuthContextType => useContext(AuthContext);
