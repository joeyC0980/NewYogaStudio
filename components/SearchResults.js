import { StyleSheet, Text, View ,FlatList, Pressable, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SearchResults = ({data,input,setInput}) => {
    const navigation = useNavigation();
  return (
    <View style={{padding:10}}>
       <FlatList data={data} renderItem={({item}) => {
           if(item.location.toLowerCase().includes(input.toLowerCase())){
               if(input === ""){
                   return null;
               }
               return (
                   <Pressable onPress={() => {
                       setInput(item.location);
                       navigation.navigate("Home",{
                           input:item.location
                       })

                   }} style={{flexDirection:"row",alignItems:"center",marginVertical:10}}>
                       <View>
                           <Image style={{width:80,height:90}} source={{uri:item.placeImage}}/>
                       </View>
                       <View style={{marginLeft:10}}>
                           <Text style={{fontSize:15,fontWeight:"500"}}>{item.studio}</Text>
                           <Text style={{fontSize:13,fontWeight:"400"}}>{item.location}</Text>
                           <Text style={{ marginVertical: 6,maxWidth:"100%"}}>{item.description}</Text>
                           <Text style={{color:"gray",fontSize:15}}>{item.classes.length} Classes</Text>
                       </View>
                   </Pressable>
               )
           }
       }}/>
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({})