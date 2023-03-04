import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Not a valid email")
      .required("Fill this required field"),
    password: yup.string().required("Fill this required field"),
  })
  .required();

export const signupSchema = yup.object({
  name: yup.string().required("Fill this required field"),
  email: yup
    .string()
    .email("Not a valid email")
    .required("Fill this required field"),
  password: yup.string().required("Fill this required field"),
});
