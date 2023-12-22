import { useMutation } from "react-query";
import {loginUser,userSignup} from "./api"

export const useLogin = () =>
  useMutation(({ email, password }) => {
    return loginUser(email, password);
  });

  export const useCreateUser = () => useMutation((data) => userSignup(data));