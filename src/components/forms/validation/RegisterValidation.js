import * as Yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9].{6,}$/;
export const RegisterValidation = new Yup.object().shape({
  username: Yup.string()
    .min(5, "Username is too short!")
    .max(15, "Username is too long!")
    .required("Username is required!"),
  password: Yup.string()
    .min(6, "Password is too short!")
    .matches(
      passwordRules,
      "Password must contain atleast one numeric character!"
    )
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match!")
    .required("Confirm password is required!"),
});
