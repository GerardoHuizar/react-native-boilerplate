import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  backgroundOrange,
  defaultFontSizeLogo,
  fontLight,
} from "~/screens/color-palette";

export default styles = StyleSheet.create({
  containerLogo: {
    alignItems: "center",
    backgroundColor: backgroundOrange,
  },
  customLogo: {
    fontSize: defaultFontSizeLogo,
    marginTop: 70,
    color: fontLight,
    textAlign: "center",
    fontFamily: "LuckiestGuy",
  },
  /** */
  forgotPassword: {
    textAlign: "right",
    top: hp("5%"),
    right: 10,
    color: "white",
  },
  /** */
  socialMediaContainerChild: {
    alignItems: "center",
    width: wp("50%"),
    height: hp("15%"),
  },
});
