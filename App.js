import { StatusBar } from 'expo-status-bar';
import {Home,Login} from "./src/Screens/Home";
import NativeBaseProvider from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Login/>
    </NativeBaseProvider>
  );
  
}

