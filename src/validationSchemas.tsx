import * as yup from "yup";
export const loginSchema = yup.object().shape({
    email:yup.string().email("Invalid Email Address").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
});

export const signupSchema = yup.object().shape({
    name: yup.string().required("Please fill the name."),
    email:yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
});