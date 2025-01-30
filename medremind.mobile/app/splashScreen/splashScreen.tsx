import { StyleSheet, View, Text, Animated } from "react-native";

export function splashScreen() {
  return <View style={styleSheet.splashScreenContainer}>Splash Screen</View>;
}

const styleSheet = StyleSheet.create({
  splashScreenContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
  },
});
