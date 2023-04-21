import React from "react";
import {View, Button, StyleSheet, TouchableOpacity, Text} from "react-native";
import Home from "./app/Home";

const App = () => {
  return (
      <View style={styles.screenContainer}>
        <Home/>
      </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1a1a1a'
  },
});

export default App;