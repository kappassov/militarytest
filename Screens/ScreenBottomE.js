import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
//import styles from "../App.js";
const ScreenBottomE = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/soldier.png")} style={styles.logo} />
      <Text style={styles.text}>
        Пройдите тест и узнайте насколько Вы сильны в начальной военной
        подготовке.
      </Text>
      <Text style={styles.textSmall}>
        Будьте уверены, что готовы пройти тест и нажмите кнопку "Начать тест"
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("ScreenB")}
      >
        <Text style={styles.btnText}>НАЧАТЬ ТЕСТ</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //padding: 10,
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    //borderRadius: 8,
    shadowColor: "#000",
    color: "#007AFF",
    fontSize: 16,
    backgroundColor: "#0F3834",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0F3834",
    borderWidth: 0.5,
    //borderColor: "#fff",
    height: 50,
    width: 300,
    borderRadius: 8,
    marginBottom: 68,
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: 40,
    marginBottom: 32,
  },
  text: {
    fontSize: 20,
    color: "#0F3834",
    width: 300,
    height: 80,
    marginBottom: 8,
  },
  textSmall: {
    fontSize: 16,
    color: "#AEAEAE",
    width: 300,
    height: 80,
  },
  profile: {
    width: 22,
    height: 22,
    marginRight: 20,
  },
  target: {
    width: 22,
    height: 22,
    marginLeft: 20,
  },
  btnText: {
    fontSize: 16,
    //fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginLeft: 100,
  },
});
ScreenBottomE.navigationOptions = () => {
  return {
    title: "ТЕСТ",
    headerStyle: {
      backgroundColor: "#0F3834",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontSize: 16,
    },
    headerRight: () => (
      <TouchableOpacity onPress={() => alert("profile")}>
        <Image style={styles.profile} source={require("../assets/user.png")} />
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <TouchableOpacity onPress={() => alert("target")}>
        <Image style={styles.target} source={require("../assets/target.png")} />
      </TouchableOpacity>
    ),
  };
};

export default ScreenBottomE;
