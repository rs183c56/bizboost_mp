import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Recovery, Register, Welcome, Home} from "./Components";
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
export default function App() {
  return (

<SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName = "Welcome"
      >
        <Stack.Screen 
          name = "Welcome"
          component ={Welcome}
          options = {{
            headerShown: false
          }}
          />

        <Stack.Screen 
          name = "Login"
          component ={Login}
          options = {{
            headerShown: false
          }}
          />

        <Stack.Screen 
          name = "Register"
          component ={Register}
          options = {{
            headerShown: false
          }}
          />

          <Stack.Screen
          name = "Recovery"
          component={Recovery}
          options={{
            headerShown: false
          }}
          />

          <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
          />


      </Stack.Navigator>
    </NavigationContainer>
</SafeAreaView>
  );
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
