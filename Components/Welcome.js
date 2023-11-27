import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../Constants/colors";
import Button from "../Buttons/Button";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.black, COLORS.primary]}
    >
      <View style={{ flex: 1, alignContent: "space-between" }}>
        <View>
          <Image source={require("../assets/logo.png")}></Image>
        </View>

        <View
          style={{
            paddingHorizontal: 30,
            position: "absolute",
            top: 450,
            width: "100%",
          }}
        >



          <View>
            <Text
              style={{
                fontSize: 14,
                color: COLORS.white,
                textAlign: "center",
                top: 10,
              }}
            >
              Innovate & Elevate: USTP BizBoost 
              A Platform for Student Skill Showcase and Business Promotion
            </Text>
          </View>

          <Button
            title="Join Now"
            onPress={() => navigation.navigate("Register")}
            style={{
              marginTop: 70,
              width: "100%",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Already have an Account?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.secondary,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                Login Here!
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
