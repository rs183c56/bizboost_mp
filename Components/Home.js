import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../Constants/colors";
import Button from "../Buttons/Button";

const Home = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.black, COLORS.primary]}
    >
      <View style={{ flex: 1, alignContent: "center" }}>
        <View>
          <Image source={require("../assets/logo.png")}></Image>
        </View>
        
       

          <Button
            title="Log Out"
            onPress={() => navigation.navigate("Login")}
            style={{
              
              width: 350,
              marginTop: 70,
              marginLeft: 33,
              
              
            }}
          />

          
        </View>
      
    </LinearGradient>
  );
};

export default Home;
