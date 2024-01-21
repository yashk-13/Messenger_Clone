import { View, KeyboardAvoidingView } from 'react-native'
import React from 'react';
import { Input, Text } from '@rneui/base';

const RegisterScreen = () => {
  return (
   <KeyboardAvoidingView>
    <Text h3 >Create a Messenger account</Text>
    <View>
        <Input placeholder='Full Name' />
    </View>
   </KeyboardAvoidingView>
  )
}

export default RegisterScreen