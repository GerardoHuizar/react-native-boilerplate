import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

const Logo = ({ customStyles }) => {
  return (
    <View>
      <Text style={customStyles}>
        {`$PUT 
 NAME OF YOUR APP`}
      </Text>
    </View>
  );
};

Logo.propTypes = {
  customStyle: PropTypes.object,
};

export default Logo;
