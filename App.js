import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import { StatusBar } from 'expo-status-bar';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();
const  globalScreenOptions = {
  headerStyle:{backgroundColor : "#2C6BED"},
  headerTintStyle :{color:'white'},
  headerTintColor : "white"

}

export default function App() {
  return (
    <NavigationContainer >
      <StatusBar  />
       <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


