
import {Text,Box,Image,Heading,VStack,input,Button,Pressable} from 'native-base'
import colors from "../colors.js";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

function Login() {
  return (
    <Box flex ={1} bg = {colors.black}>
        <Image flex ={1} alt ="logo" 
        resizeMode='cover'
        size = "lg"
        w ="full"
        source={require("../../assets/cover.png")}/>
      <Box w="full" h="full" position="absolute" top = "0" px="6"
      bg={colors.deepestGray} justifyContent="center" >
        <Heading>Login</Heading>
        <VStack space={5} pt ="6">
          <input 
          InputLeftElemant={
          <MaterialIcons name="email" size={20} color={colors.main} />}
          variant = "underlined" placeholder='user@gmail.com' w="70%" color={colors.main} borderBottomColor={colors.underline}/>

          <input 
          InputLeftElemant={<Ionicons name="eye-sharp" size={24} color={colors.main} />}
          variant = "underlined" placeholder='**************' w="70%" type="password" color={colors.main} borderBottomColor={colors.underline}/>
        </VStack>
        <Button 
        _pressed={{
          bg:colors.main,

        }}
        my={30} w = "40%" rounded={50} bg = {colors.main}>Login</Button>
        <Pressable mt={4}>
          <Text color={colors.deepestGray}>Sign Up</Text>
        </Pressable>
      </Box>
        
    </Box>
  )
}
export default Login;