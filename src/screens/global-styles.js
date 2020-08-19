import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  backgroundLight,
  backgroundOrange,
  backgroundDark,
  fontLight,
  fontGrey,
  fontSuccess,
  fontError,
  defaultFontSize,
} from "~/screens/color-palette";

export default StyleSheet.create({
  backgroundLight: {
    backgroundColor: backgroundLight,
  },
  backgroundDark: {
    backgroundColor: backgroundDark,
  },
  backgroundOrange: {
    backgroundColor: backgroundOrange,
  },

  flexDirectionRow: {
    flexDirection: "row",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  alignSelfCenter: {
    alignSelf: "center",
  },

  fontLight: {
    color: fontLight,
  },
  fontGrey: {
    color: fontGrey,
  },
  fontSuccess: {
    color: fontSuccess,
  },
  fontError: {
    color: fontError,
  },
  defaultFontSize: {
    fontSize: defaultFontSize,
  },
  defaltFontFamily: {
    fontFamily: "",
  },

  wp: (value) => ({
    width: wp(`${value}%`),
  }),
  hp: (value) => ({
    height: hp(`${value}%`),
  }),
  bottom: (value) => ({
    bottom: hp(`${value}%`),
  }),
  paddingRight: (value) => ({
    paddingRight: wp(`${value}%`),
  }),
  marginBottom: (value) => ({
    marginBottom: hp(`${value}%`),
  }),

  /* wavy custom style */
  wavyStyle: (position, top) => ({
    position: position,
    top: top,
  }),
});
