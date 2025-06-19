// Validate with yup
import { object, ref, string } from 'yup';

export const registerSchema = object({
  email: string()
    .required("Please input your Email")
    .email("Email invalid"),
  name: string()
    .required("Please input nick name")
    .min(3, "Need more than 3 characters"),
  password: string()
    .required("Please input password")
    .min(6, "Need more than 6 characters"),
  confirmPassword: string()
    .required("Please input password again")
    .oneOf([ref("password"), null], "Password is not matched"),
});

export const loginSchema = object({
  email: string()
    .required("Please input your Email")
    .email("Email invalid"),
  password: string()
    .required("Please input password")
    .min(6, "Need more than 6 characters"),
});

