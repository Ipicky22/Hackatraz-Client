import React, { useState } from "react";
import { View, Text } from "react-native";
import { Title, TextInput, Button } from "react-native-paper";

import styles from "../../styles/Login/login";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  onRegister = () => {
    props.navigation.navigate("Register");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#a9daa9" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          width: "80%",
          alignSelf: "center"
        }}
      >
        <Title style={styles.title}>Login</Title>
        <TextInput
          label="Email"
          value={email}
          type="email"
          theme={{ colors: { primary: "#d03030" } }}
          style={styles.default}
          mode="outlined"
          onChangeText={text => setEmail({ text })}
        />
        <TextInput
          label="Password"
          value={password}
          secureTextEntry={true}
          style={styles.default}
          theme={{ colors: { primary: "#d03030" } }}
          mode="outlined"
          onChangeText={text => setPassword({ text })}
        />
        <Button
          mode="outlined"
          style={styles.button}
          disabled={true}
          theme={{ colors: { primary: "#d03030" } }}
          onPress={() => console.log("Pressed")}
        >
          Login
        </Button>

        <Button
          mode="outlined"
          color="white"
          x
          theme={{ colors: { primary: "#d03030" } }}
          style={styles.button}
          onPress={this.onRegister}
        >
          Register
        </Button>
      </View>
    </View>
  );
}
