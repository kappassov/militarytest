import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ScreenA = ({ navigation }) => {
  function navigationToNextScreenWithSomedata() {
    navigation.navigate("ScreenB");
  }
  return (
    <View>
      <Text>Screen A</Text>
      <Button
        title="Navigate to Screen B"
        onPress={navigationToNextScreenWithSomedata}
      />
    </View>
  );
};

export default ScreenA;
