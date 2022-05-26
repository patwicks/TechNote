import * as Yup from "yup";

export const LoginValidation = new Yup.object().shape({
  username: Yup.string().required("Email is equired!"),
  password: Yup.string().required("Password is Required!"),
});
