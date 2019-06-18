import React, { useState } from 'react';
import { View, Image } from 'react-native'
import { vmin } from 'react-native-expo-viewport-units';
import { TextInput, Button } from 'react-native-paper';


export default function Register() {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    return (

        <View style={{ flex: 1, backgroundColor: "#a9daa9" }}>
            <Image style={{ width: vmin(45), height: vmin(37), alignSelf: 'center', marginTop: 56 }} source={require('../../../assets/logo.png')} />
            <View style={{ flex: 1, justifyContent: "center", width: "80%", alignSelf: "center" }}>
                <TextInput
                    mode="outlined"
                    label='Firstname'
                    value={firstname}
                    onChangeText={text => setFirstname(text)}
                    theme={{ colors: { primary: '#d03030' } }}
                    style={{ backgroundColor: "#a9daa9", marginBottom: 20, height: 50 }}
                />
                <TextInput
                    mode="outlined"
                    label='Lastname'
                    value={lastname}
                    onChangeText={text => setLastname(text)}
                    theme={{ colors: { primary: '#d03030' } }}
                    style={{ backgroundColor: "#a9daa9", marginBottom: 20, height: 50 }}
                />
                <TextInput
                    mode="outlined"
                    label='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    theme={{ colors: { primary: '#d03030' } }}
                    style={{ backgroundColor: "#a9daa9", marginBottom: 20, height: 50 }}
                    textContentType="emailAddress"
                />
                <TextInput
                    mode="outlined"
                    label='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    theme={{ colors: { primary: '#d03030' } }}
                    style={{ backgroundColor: "#a9daa9", marginBottom: 20, height: 50 }}
                    secureTextEntry={true}
                />
                <TextInput
                    mode="outlined"
                    label='Password Confirmation'
                    value={passwordConfirm}
                    onChangeText={text => setPasswordConfirm(text)}
                    theme={{ colors: { primary: '#d03030' } }}
                    style={{ backgroundColor: "#a9daa9", marginBottom: 20, height: 50 }}
                    secureTextEntry={true}
                />
                <Button color="white" mode="outlined" style={{ backgroundColor: "#212720" }} onPress={() => console.log('Pressed')}>
                    Register
                </Button>
            </View>
        </View>

    );
}
