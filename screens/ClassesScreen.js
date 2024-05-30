import { StyleSheet, Text, View } from 'react-native'
import React,{ useLayoutEffect} from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";

const ClassesScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: "Popular classes",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
          color: "#FDFEFE",
        },
        headerStyle: {
          backgroundColor: "#424949",
          height: 110,
          borderBottomColor: "transparent",
          shadowColor: "transparent",
        },
        
      });
    }, []);
  return (
    <View>
      <Text>ClassesScreen</Text>
    </View>
  )
}

export default ClassesScreen

const styles = StyleSheet.create({})