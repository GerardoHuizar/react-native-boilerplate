import { memo } from "react";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";

import { validationFormLogin } from "./actions";
import { formStateSelector } from "./selectors";

import Login from "~/screens/login/Component";
import loginRootSaga from "./saga";

export const mapStateToProps = (state) => ({
  state: formStateSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      validationFormLogin,
    },
    dispatch
  ),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Login);
