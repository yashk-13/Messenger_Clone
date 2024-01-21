import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { Image, Button,Icon } from "@rneui/themed";
import { Text } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import RegisterScreen from "./RegisterScreen";

const { width: deviceWidth } = Dimensions.get("window");
const LoginScreen = ({navigation}) => {
  return (
      <SafeAreaView>
        <StatusBar style="light" />
      <KeyboardAvoidingView behavior="padding"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 15,
        }}
      >
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png",
          }}
          style={{ height: 70, width: 70 }}
        />
        <Text h1>Welcome to Messenger</Text>

        <View
          style={{
            padding: 20,
            display: "flex",
            width: deviceWidth,
            justifyContent: "center",
            alignItems: "center",
            margin: 15,
            gap: 20,
          }}
        >
          <TextInput
            style={styles.inputs}
            placeholderTextColor="gray"
            placeholder="Enter Usernname or E-mail"
          />
          <TextInput
            style={styles.inputs}
            placeholderTextColor="gray"
            placeholder="Enter Password"
            secureTextEntry={true}
          />
          <Button  color="#2C6BED" radius={"md"} type="solid" >
            <Icon name="facebook" 
            size={40}
            type="material" 
            paddingRight={10}/>
           Connect with Facebook
            {/* <Icon name="save" color="white" /> */}
          </Button>
          <View style={styles.ButtonView}>
          <Button color="#2C6BED"  size="md" radius="md">
            Log in
          </Button>
          <Button color="#2C6BED"  size="md" radius="md" onPress={() => navigation.navigate('Register')}>
            Sign up
          </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputs: {
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  ButtonView :{
    display:"flex",
    flexDirection:'row',
    gap:7
  }
});
export default LoginScreen;
