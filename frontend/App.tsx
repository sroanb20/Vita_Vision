import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Home from "./src/screens/Home";
import Main from "./src/screens/Main";
import List from "./src/screens/List";
import React from "react";
import Settings from "./src/screens/Settings";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name={"Home"} component={Home}/>
                  <Stack.Screen name={"Login"} component={Login}/>
                  <Stack.Screen name={"Registration"} component={Register}/>

                  <Stack.Screen name={"Your Statistics"} component={Main}/>
                  <Stack.Screen name={"List"} component={List}/>
                  <Stack.Screen name={"Settings"} component={Settings}/>
              </Stack.Navigator>
          </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
