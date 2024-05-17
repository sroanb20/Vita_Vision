import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Home from "./src/screens/Home";
import Main from "./src/screens/Main";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"Home"} component={Home}/>
          <Stack.Screen name={"Login"} component={Login}/>
          <Stack.Screen name={"Registration"} component={Register}/>
          <Stack.Screen name={"Main"} component={Main}/>

          {/*<View style={styles.container}>
            <Login/>
          </View>*/}
        </Stack.Navigator>
      </NavigationContainer>
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
