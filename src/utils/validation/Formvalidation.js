import * as yup from "yup";

const emailValidation = yup
  .string()
  .test("email", "Invalid email", function (value) {
    if (!value) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  })
  .required("Email is required");

export const loginValidation = yup.object({
  email: yup.string().required('username is required'),
  password: yup.string().required('Password is required'),
});

export const forgotPasswordValidation = yup.object({
  email: emailValidation,
});

export const resetPasswordValidation = yup.object({
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should be atleast 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords don't match.")
    .required("Password is required")
    .min(6, "Password should be atleast 6 characters"),
});

export const changePasswordValidation = yup.object({
  oldPassword: yup.string().required("Old password is required"),
  newPassword: yup.string().required("New password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), undefined], "Passwords don't match.")
    .required("Confirm Password is required"),
});
