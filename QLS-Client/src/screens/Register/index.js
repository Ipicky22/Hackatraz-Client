import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { vmin } from 'react-native-expo-viewport-units';
import { TextInput, Button } from 'react-native-paper';
import { withNavigation } from 'react-navigation';

const Register = (props) => { 

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [loading, setLoading] = useState(false)

    onRegister = () => {

        if (firstname != "" && lastname != "" && email != "" && password != "" && passwordConfirm != "") {
            if (password == passwordConfirm) {
                if (nickname.length > 5 && password.length > 7) {

                    setLoading(true)
                }
            }
        }
    }

    onLogin = () => {
        props.navigation.navigate('Login')
    }

    return (

        <View style={{ flex: 1, backgroundColor: "#a9daa9" }}>
            <Image style={{ width: vmin(45), height: vmin(37), alignSelf: 'center', marginTop: 56 }} source={require('../../../assets/logo.png')} />
            <View style={{ flex: 1, justifyContent: "center", width: "70%", alignSelf: "center" }}>
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
                <Button loading={loading ? true : false} color="white" mode="outlined" style={{ backgroundColor: "#212720" }} onPress={this.onRegister}>
                    Register
                </Button>

                <TouchableOpacity onPress={this.onLogin} style={{ padding: 2, alignItems: "center"}}>
                    <Text>Already have an account ?</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

export default withNavigation(Register)