import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert

} from "react-native";
import React, { useLayoutEffect ,useState} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { EvilIcons } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomModal, ModalButton, ModalFooter } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";


const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  // const [instructor,setInstructor] = useState();
  const[modalVisibile,setModalVisibile]= useState(false);
  const [rooms, setRooms] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const route = useRoute();
 

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Yoga Studio",
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
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 20 }}
        />
      ),
    });
  }, []);
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };
  console.log(route.params);

  const searchClasses = (classes) => {
    if(!route.params || !selectedDates){
      Alert.alert(
        "Missing Input",
        "Please select all the fields",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }

    if(route.params && selectedDates){
      navigation.navigate("Classes",{
        classes:classes,
        // adults:adults,
        // children:children,
        selectedDates:selectedDates,
        // location:location
      })
    }
  };





  return (
    <>
    <View>
      <Header />
      <ScrollView>
        <View
          style={{
            margin: 20,
            borderColor: "#D7DBDD",
            borderWidth: 1,
            borderRadius: 3,
          }}
        >
          {/* classes type */}
          <Pressable
          onPress={() => navigation.navigate("Search")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              borderColor:"#CCD1D1",
              borderWidth:1,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}
          >
            <EvilIcons name="search" size={24} color="grey" />
            <TextInput placeholder={route?.params ? route.params.input :"looking for classes"}></TextInput>
          </Pressable>
          {/* select dates */}
          <Pressable
           style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            borderColor:"#CCD1D1",
            borderWidth:1,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
            <EvilIcons name="calendar" size={24} color="grey" />
            <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#CACFD2",
                  
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="#D7BDE2"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                allowFontScaling={false}
                placeholder={"Select Your Dates"}
                mode={"range"}
                locale={"en"}
              />
          </Pressable>
          {/*instructors */}
          <Pressable 
           onPress={() => setModalVisibile(!modalVisibile)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            borderColor:"#CCD1D1",
            borderWidth:1,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <MaterialCommunityIcons name="human-queue" size={24} color="grey" />
          <TextInput placeholder="choose your instructor"></TextInput>
          </Pressable>
          {/* search button  */}
          <Pressable
          onPress={() => searchClasses(route?.params.input)}
           style={{
            borderColor:"#CCD1D1",
            borderWidth:1,
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor:"#CACFD2",
          }}>
            <Text style={{textAlign:"center",fontSize:15,color:"#424949",fontWeight:500}}>Search</Text>
          </Pressable>
        </View>

        <Text
            style={{ marginHorizontal: 20, fontSize: 14, marginTop: 30, fontWeight: "300" ,alignSelf:"center"}}
          >
            Sign up to get texts about exclusive invites, promotions, and news.
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 30,
                backgroundColor:"#273746",
                borderRadius: 10,
                padding: 5,
                marginHorizontal: 10,
              }}
            >
              <Image
  source={require('../assets/yoga3.jpg')}
  style={{
    width: 190,
    height: 140,
    alignSelf: 'center',
    
  }}
/>
            </Pressable>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 30,
                backgroundColor:"#273746",
                borderRadius: 10,
                padding: 5,
                marginHorizontal: 10,
              }}
            >
              <Image
  source={require('../assets/yoga2.gif')}
  style={{
    width: 190,
    height: 140,
    alignSelf: 'center',
    
  }}
/>
            </Pressable>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 30,
                backgroundColor:"#273746",
                borderRadius: 10,
                padding: 5,
                marginHorizontal: 10,
              }}
            >
              <Image
  source={require('../assets/yoga1.gif')}
  style={{
    width: 190,
    height: 140,
    alignSelf: 'center',
    
  }}
/>
            </Pressable>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 30,
                backgroundColor:"#273746",
                borderRadius: 10,
                padding: 5,
                marginHorizontal: 10,
              }}
            >
              <Image
  source={require('../assets/7.jpg')}
  style={{
    width: 190,
    height: 140,
    alignSelf: 'center',
    
  }}
/>
            </Pressable>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 30,
                backgroundColor:"#273746",
                borderRadius: 10,
                padding: 5,
                marginHorizontal: 10,
              }}
            >
              <Image
  source={require('../assets/yoga4.gif')}
  style={{
    width: 190,
    height: 140,
    alignSelf: 'center',
    
  }}
/>
            </Pressable>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 30,
                backgroundColor:"#273746",
                borderRadius: 10,
                padding: 5,
                marginHorizontal: 10,
              }}
            >
              <Image
  source={require('../assets/yoga5.gif')}
  style={{
    width: 190,
    height: 140,
    alignSelf: 'center',
    
  }}
/>
            </Pressable>

           
          </ScrollView>

          <Pressable
            style={{
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
              
            }}
         
          >
          <Text
          style={{color:"#A569BD", marginTop:30,}}>Namaste 🪷</Text>
          </Pressable>
        

      </ScrollView>
    </View>

    <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
             text="Apply"
             style={{
               color: "#FDFEFE",
               marginBottom: 20, 
               backgroundColor: "#CACFD2",
             }}
              onPress={() => setModalVisibile(!modalVisibile)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select Your Instructor" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>David Elliott</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 2,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#CACFD2",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {rooms}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setRooms((c) => c + 1)}
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 2,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#CACFD2",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Marly Lauren</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setAdults(Math.max(1, adults - 1))}
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 2,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#CACFD2",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {adults}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setAdults((c) => c + 1)}
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 2,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#CACFD2",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Karina Fernandez</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 2,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#CACFD2",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {children}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setChildren((c) => c + 1)}
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 2,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#CACFD2",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Michael Hall</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 2,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#CACFD2",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {children}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setChildren((c) => c + 1)}
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 2,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#CACFD2",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Betsy Tu</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 2,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#CACFD2",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {children}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setChildren((c) => c + 1)}
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 2,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#CACFD2",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
