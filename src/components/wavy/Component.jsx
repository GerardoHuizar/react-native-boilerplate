import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";

const Wavy = ({ customStyle, customBgColor, customWavePattern }) => {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 1440 320" style={customStyle}>
      <Path fill={customBgColor.backgroundColor} d={customWavePattern} />
    </Svg>
  );
};

Wavy.propTypes = {
  customStyle: PropTypes.object,
  customBgColor: PropTypes.object,
  customWavePattern: PropTypes.string,
};

export default Wavy;
