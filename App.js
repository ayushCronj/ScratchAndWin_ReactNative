import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";

import { Button } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

let itemArray = new Array(25).fill("empty");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: "",
      movesCount: 5
    };
  }

  componentDidMount() {
    this.setState({
      randomNumber: this.generateRandomNumber()
    });
  }

  generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 25);
    this.setState({
      randomNumber,
      isScratched: true
    });
    console.log(randomNumber);
    return randomNumber;
  };

  sractchItem = itemNumber => {
    if (
      itemArray[itemNumber] === "empty" &&
      this.state.randomNumber === itemNumber
    ) {
      itemArray[itemNumber] = "lucky";
      this.setState({
        movesCount: this.state.movesCount - 1
      });
    } else if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = "unlucky";
      this.setState({
        movesCount: this.state.movesCount - 1
      });
    }

    this.forceUpdate();
  };

  scratchItemIcon = itemNumber => {
    if (itemArray[itemNumber] === "lucky") return "dollar";
    else if (itemArray[itemNumber] === "unlucky") return "frown-o";
    else return "circle";
  };

  scratchItemColor = itemNumber => {
    if (itemArray[itemNumber] === "lucky") return "green";
    else if (itemArray[itemNumber] === "unlucky") return "red";
    else return "black";
  };

  showAllItems = () => {
    itemArray.fill("unlucky");
    itemArray[this.state.randomNumber] = "lucky";
    this.forceUpdate();
  };

  resetGame = () => {
    this.setState(
      {
        randomNumber: this.generateRandomNumber(),
        movesCount: 5
      },
      () => {
        itemArray.fill("empty");
        this.forceUpdate();
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          {this.state.movesCount > 0 ? (
            <Text style={styles.topBarText}>
              Moves Left - {this.state.movesCount}/5
            </Text>
          ) : (
            <Text style={styles.topBarText}>
              All Moves Exhausted!! Click Reveal All or Reset Game!!
            </Text>
          )}
        </View>
        {/* <Text>App.js to start working on your app!</Text> */}
        <View style={styles.grid}>
          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(0) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(0)}
                size={50}
                color={this.scratchItemColor(0)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(1) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(1)}
                size={50}
                color={this.scratchItemColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(2) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(2)}
                size={50}
                color={this.scratchItemColor(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(3) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(3)}
                size={50}
                color={this.scratchItemColor(3)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(4) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(4)}
                size={50}
                color={this.scratchItemColor(4)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(5) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(5)}
                size={50}
                color={this.scratchItemColor(5)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(6) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(6)}
                size={50}
                color={this.scratchItemColor(6)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(7) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(7)}
                size={50}
                color={this.scratchItemColor(7)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(8) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(8)}
                size={50}
                color={this.scratchItemColor(8)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(9) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(9)}
                size={50}
                color={this.scratchItemColor(9)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(10) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(10)}
                size={50}
                color={this.scratchItemColor(10)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(11) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(11)}
                size={50}
                color={this.scratchItemColor(11)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(12) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(12)}
                size={50}
                color={this.scratchItemColor(12)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(13) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(13)}
                size={50}
                color={this.scratchItemColor(13)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(14) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(14)}
                size={50}
                color={this.scratchItemColor(14)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(15) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(15)}
                size={50}
                color={this.scratchItemColor(15)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(16) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(16)}
                size={50}
                color={this.scratchItemColor(16)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(17) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(17)}
                size={50}
                color={this.scratchItemColor(17)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(18) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(18)}
                size={50}
                color={this.scratchItemColor(18)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(19) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(19)}
                size={50}
                color={this.scratchItemColor(19)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(20) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(20)}
                size={50}
                color={this.scratchItemColor(20)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(21) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(21)}
                size={50}
                color={this.scratchItemColor(21)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(22) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(22)}
                size={50}
                color={this.scratchItemColor(22)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(23) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(23)}
                size={50}
                color={this.scratchItemColor(23)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.state.movesCount > 0 ? this.sractchItem(24) : null;
              }}>
              <FontAwesome
                name={this.scratchItemIcon(24)}
                size={50}
                color={this.scratchItemColor(24)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Button
          full
          success
          style={styles.button}
          onPress={() => {
            this.showAllItems();
          }}>
          <Text style={styles.buttonText}>Reveal All</Text>
        </Button>
        <Button
          full
          primary
          style={styles.button}
          onPress={() => {
            this.resetGame();
          }}>
          <Text style={styles.buttonText}>Reset Game</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  topBar: {
    backgroundColor: "#8B78E6",
    height: 50,
    justifyContent: "center",
    width: Dimensions.get("window").width,
    marginVertical: 20
  },
  topBarText: {
    color: "white",
    textAlign: "center"
  },
  grid: {},
  itemRow: {
    flexDirection: "row"
  },
  item: {
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    minWidth: 70,
    borderColor: "black"
  },
  button: {
    marginVertical: 15,
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 18
  }
});
