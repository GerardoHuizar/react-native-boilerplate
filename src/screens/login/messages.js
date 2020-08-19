/*
 * Home Messages
 *
 * This contains all the text for the Home component.
 */
import { defineMessages } from "react-intl";

export const scope = "boilerplate.screens.login";

export default defineMessages({
  email: {
    id: `${scope}.form.email`,
    defaultMessage: "Your Email Address",
  },
  password: {
    id: `${scope}.form.password`,
    defaultMessage: "Password",
  },
  forgotPassword: {
    id: `${scope}.form.forgotPassword`,
    defaultMessage: "Forgot Password?",
  },
  signup: {
    id: `${scope}.signup`,
    defaultMessage: "Signup",
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: "Login",
  },
  orLoginWith: {
    id: `${scope}.orLoginWith`,
    defaultMessage: "Or Login With",
  },
  notFoundPage: {
    id: `${scope}.NotFoundPage.header`,
    defaultMessage: "Page not found.",
  },
});
