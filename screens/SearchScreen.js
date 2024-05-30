import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React ,{useState}from "react";
import { Ionicons } from "@expo/vector-icons";
import SearchResults from "../components/SearchResults";

const SearchScreen = () => {
    const[input,setInput] = useState("");
    const data =[
        {
            id:"0",
            studio:"Modo Yoga",
            location:"Williamsburg",
            placeImage:"https://s3-media0.fl.yelpcdn.com/bphoto/rBp8jNMlhoGcncAkknVNHg/o.jpg",
            description:"The instructors here is extremely passionate about yoga and caring for her students.",
            classes:[
              {
              id:"101",
              name:"Freestyle flow",
              image:"",
              rating: 5,
              address:"studio 1",
              oldPrice: 41,
              newpPrice: 35,
              latitude:"",
              longtutude:"",
              photos:[
                {
                id:"",
                image:""
              }]
              }

            ]
        },
        {
            id:"1",
            studio:" CorePower Yoga",
            location:"Williamsburg",
            placeImage:"https://s3-media0.fl.yelpcdn.com/bphoto/cM906mbp8NRUxXsjDb0uIQ/348s.jpg",
            description:"Wonderful studio, super clean and amazing classes.",
            classes:[]
        },
        {
            id:"2",
            studio:"Alo",
            location:"Williamsburg",
            placeImage:"https://s3-media0.fl.yelpcdn.com/bphoto/vuB-syPpxe5q8NtGpEaFkw/348s.jpg",
            description:"It's a great, airy space. The staff is very friendly.",
            classes:[]
        },
        {
            id:"3",
            studio:"Yoga Space NYC",
            location:"Williamsburg",
            placeImage:"https://s3-media0.fl.yelpcdn.com/bphoto/8az-Bk07WX9tqulasEVKJw/o.jpg",
            description:"Beautiful space with lots of windows, lots of room, mats, blocks, boulders, blankets, straps provided for you.",
            classes:[]
        },
        {
            id:"4",
            studio:" Y7 Studio Williamsburg",
            location:"Williamsburg",
            placeImage:"https://s3-media0.fl.yelpcdn.com/bphoto/vsQadI2iEyfhvyQPzjEDtQ/348s.jpg",
            description:"Y7 Studio is sweat dripping, beat bumping, candlelit yoga.",
            classes:[]
        },
        {
            id:"5",
            studio:" Y7 Studio Williamsburg",
            location:"Williamsburg",
            placeImage:"https://s3-media0.fl.yelpcdn.com/bphoto/vsQadI2iEyfhvyQPzjEDtQ/348s.jpg",
            description:"Y7 Studio is sweat dripping, beat bumping, candlelit yoga.",
            classes:[]
        },
        

    ];
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "#ABB2B9",
          borderWidth: 1,
          borderRadius: 10,
        }}
      >
        <TextInput value={input} onChangeText={(text) => setInput(text)} placeholder="Enter your location"></TextInput>
        <Ionicons name="md-search-circle-outline" size={22} color="black" />
      </View>
      <SearchResults data={data} input={input} setInput={setInput}/>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
