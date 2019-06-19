import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { TextInput, Button, Title } from "react-native-paper";
import { vmin } from 'react-native-expo-viewport-units';
import ENV from '../../../env';
import Func from '../../functions';

export default function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  storeData = async (email, password, token) => {
    await Func.setAsyncStorage(email, password, token)
}

  onRegister = () => {
    props.navigation.navigate('Register')
  }

  onLogin = async () => {

    const url = ENV.HEROKU_API_URL_LOGIN
    const body = JSON.stringify({ email, password })
    if (email != "" && password != "") {
      setLoading(true)
      const response = await Func.fetch(url, "POST", body);
      if (response.status == 400) {
        setLoading(false)
      } else {
        const responseJSON = await response.json()
        console.log(responseJSON)
        await this.storeData(email, password, responseJSON.meta.token)
        props.navigation.navigate('Home')
      }
    } else {
      setLoading(false)
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#a9daa9" }}>
      <Image style={{ width: vmin(45), height: vmin(37), alignSelf: 'center', marginTop: 56 }} source={require('../../../assets/logo.png')} />
      <Title style={{ alignSelf: "center", }}>LOTOS</Title>
      <View style={{ flex: 1, justifyContent: "center", width: "70%", alignSelf: "center" }}>
        <TextInput
          mode="outlined"
          label='Email'
          value={email}
          theme={{ colors: { primary: '#d03030' } }}
          style={{ backgroundColor: "#a9daa9", marginBottom: 20, height: 50 }}
          textContentType="emailAddress"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          mode="outlined"
          label='Password'
          value={password}
          theme={{ colors: { primary: '#d03030' } }}
          style={{ backgroundColor: "#a9daa9", marginBottom: 20, height: 50 }}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />

        <Button loading={loading ? true : false} color="white" mode="outlined" style={{ backgroundColor: "#212720" }} onPress={this.onLogin}>
          Login
        </Button>

        <TouchableOpacity onPress={this.onRegister} style={{ padding: 2, alignItems: "center" }}>
          <Text>Create an account here</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}
