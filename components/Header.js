import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#424949",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItem: "center",
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 20,
          padding: 7,
        }}
      >
         <AntDesign name="calendar" size={24} color="#D7BDE2" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Studios
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItem: "center",
          
        }}
      >
      
        <MaterialCommunityIcons name="yoga" size={24} color="#D7BDE2" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Yoga
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItem: "center",
          
        }}
      >
       <MaterialCommunityIcons name="bottle-soda" size={24} color="#D7BDE2" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Water
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItem: "center",
          
        }}
      >
       <FontAwesome5 name="heartbeat" size={24} color="#D7BDE2" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Healthy
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
