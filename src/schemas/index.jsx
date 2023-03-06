import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(3).max(20).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    subject: Yup.string().min(10).max(70).required("please enter subject"),
    message: Yup.string().required("Please enter message"),
    // password: Yup.string().min(6).required("Please enter passeord"),
    // confirm_password: Yup.string().required().oneOf([Yup.ref("password"),null],"password must match"),
})