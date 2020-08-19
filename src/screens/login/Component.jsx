import React from "react";
import PropTypes from "prop-types";
import { KeyboardAvoidingView, ScrollView, View, Platform } from "react-native";
import { injectIntl } from "react-intl";
import { StatusBar } from "expo-status-bar";
import { Text, SocialIcon } from "react-native-elements";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import Logo from "~/components/logo/Component";
import Wavy from "~/components/wavy/Component";
import Sae from "~/components/sae-input/Component";

import messages from "./messages";

import styles from "./style";
import gs from "~/screens/global-styles";
import { loginSvg } from "~/screens/svgConstants";

const Login = ({ actions, state, intl }) => {
  console.log(actions);
  const signupHandle = () => {
    actions.validationFormLogin();
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={gs.backgroundLight}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View>
          <View style={[styles.containerLogo, gs.hp(33)]}>
            <Logo customStyles={styles.customLogo} />
          </View>

          <View style={[gs.backgroundOrange, gs.hp(33)]}>
            <View style={[gs.wp(80), gs.alignSelfCenter]}>
              <Sae
                label={intl.formatMessage(messages.email)}
                iconClass={FontAwesomeIcon}
                iconName={"check-circle"}
                iconColor={gs.fontLight.color}
                labelStyle={gs.fontLight}
                style={gs.bottom(2)}
                inputStyle={gs.fontLight}
              />
            </View>
            <View style={[gs.wp(80), gs.alignSelfCenter]}>
              <Sae
                label={intl.formatMessage(messages.password)}
                iconClass={FontAwesomeIcon}
                iconName={"check-circle"}
                iconColor={gs.fontLight.color}
                secureTextEntry={true}
                labelStyle={gs.fontLight}
                style={gs.bottom(2)}
                inputStyle={gs.fontLight}
              />
              <Text
                onClick={() => {
                  alert("Alert Title", "Alert message.");
                }}
                style={styles.forgotPassword}
              >
                {intl.formatMessage(messages.forgotPassword)}
              </Text>
            </View>
            <Wavy
              customStyle={gs.wavyStyle("absolute", 130)}
              customBgColor={gs.backgroundOrange}
              customWavePattern={loginSvg}
            />
          </View>

          <View style={[styles.socialMediaContainer, gs.hp(33)]}>
            <View style={gs.flexDirectionRow}>
              <View style={styles.socialMediaContainerChild}>
                <SocialIcon
                  style={gs.wp(40)}
                  light
                  raised
                  fontStyle={[gs.paddingRight(4), gs.fontGrey]}
                  title={intl.formatMessage(messages.signup).toUpperCase()}
                  button
                  onPress={signupHandle}
                />
              </View>
              <View style={styles.socialMediaContainerChild}>
                <SocialIcon
                  style={[gs.wp(40), gs.backgroundDark]}
                  raised
                  fontStyle={gs.paddingRight(4)}
                  title={intl.formatMessage(messages.login).toUpperCase()}
                  button
                  onPress={() => {
                    alert("Alert Title", "Alert message.");
                  }}
                />
              </View>
            </View>
            <View style={gs.alignItemsCenter}>
              <View style={gs.marginBottom(5)}>
                <Text>{intl.formatMessage(messages.orLoginWith)}</Text>
              </View>
              <View style={gs.flexDirectionRow}>
                <SocialIcon
                  raised
                  type="twitter"
                  onPress={() => {
                    alert("Alert Title", "Alert message.");
                  }}
                />
                <SocialIcon
                  raised
                  type="facebook"
                  onPress={() => {
                    alert("Alert Title", "Alert message.");
                  }}
                />
                <SocialIcon
                  raised
                  type="google"
                  onPress={() => {
                    alert("Alert Title", "Alert message.");
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style="light" />
    </ScrollView>
  );
};

Login.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object,
  intl: PropTypes.object,
};

export default injectIntl(Login);
