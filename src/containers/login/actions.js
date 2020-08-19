import { VALIDATION_FORM_LOGIN_WORKFLOW_START } from "./constants";

export const validationFormLogin = (payload) => ({
  type: VALIDATION_FORM_LOGIN_WORKFLOW_START,
  payload,
});
