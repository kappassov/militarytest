import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

const ScreenB = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionNumber}>Вопрос 2/4</Text>
      <View style={styles.progressBar1}></View>
      <View style={styles.progressBar2}></View>
      <View></View>
      <View style={styles.container2}>
        <Image
          style={styles.soldier}
          source={require("../assets/walking_soldier'.png")}
        />
        <Text style={styles.question}>
          Кто является министром обороны на территории Казахстана?
        </Text>
        <TouchableOpacity style={styles.inactive1}>
          <Text style={styles.btnText}>Касым-Жомарт Токаев</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.active}>
          <Image style={styles.tick} source={require("../assets/tick.png")} />
          <Text style={styles.btnTextActive}>Нурлан Ермекбаев</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactive2}>
          <Text style={styles.btnText}>Сабина Юрченко</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactive3}>
          <Text style={styles.btnText}>Гани Касымов</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //padding: 10,
    backgroundColor: "#336600",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    width: 330,
    height: 400,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingLeft: 32,
    paddingRight: 32,
  },
  question: {
    fontSize: 20,
    color: "#0F3834",
    height: 100,
    width: 240,
    position: "absolute",
    zIndex: 0,
    left: 32,
    top: 60,
  },
  inactive1: {
    backgroundColor: "#FFF",
    //borderColor: "#fff",
    height: 50,
    width: 265,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#AEAEAE",
    paddingTop: 20,
    paddingLeft: 5,
    top: 150,
  },
  active: {
    backgroundColor: "#7EA950",
    //borderColor: "#fff",
    height: 50,
    width: 265,
    borderRadius: 8,
    paddingTop: 20,
    paddingLeft: 5,
    position: "absolute",
    bottom: 140,
    left: 32,
  },

  inactive2: {
    backgroundColor: "#FFF",
    //borderColor: "#fff",
    height: 50,
    width: 265,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#AEAEAE",
    paddingTop: 20,
    paddingLeft: 5,
    position: "absolute",
    left: 32,
    bottom: 80,
  },
  inactive3: {
    backgroundColor: "#FFF",
    //borderColor: "#fff",
    height: 50,
    width: 265,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#AEAEAE",
    paddingTop: 20,
    paddingLeft: 5,
    position: "absolute",
    left: 32,
    bottom: 20,
  },
  btnText: {
    color: "#AEAEAE",
    fontSize: 16,
    textAlign: "left",
    bottom: 5,
  },
  btnTextActive: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "left",
    left: 30,
    bottom: 25,
  },
  backArrow: {
    height: 22,
    width: 22,
    marginLeft: 22,
  },
  questionNumber: {
    fontSize: 16,
    color: "#AEAEAE",
    right: 125,
    marginBottom: 8,
  },
  progressBar1: {
    height: 3,
    width: 330,
    backgroundColor: "#AEAEAE",
    top: 3,
  },
  progressBar2: {
    height: 3,
    width: 165,
    backgroundColor: "#7EA950",
    marginBottom: 40,
    right: 83,
  },
  soldier: {
    height: 70,
    width: 40,
    right: 257,
    zIndex: 1,
    bottom: 345,
    position: "absolute",
  },
  tick: {
    height: 22,
    width: 22,
    paddingLeft: 20,
    bottom: 5,
  },
});
ScreenB.navigationOptions = () => {
  return {
    title: "",
    headerStyle: {
      backgroundColor: "#336600",
    },
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate("BottomTabE")}>
        <Image
          style={styles.backArrow}
          source={require("../assets/back_arrow.png")}
        />
      </TouchableOpacity>
    ),
  };
};
export default ScreenB;
