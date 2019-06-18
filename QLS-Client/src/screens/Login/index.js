import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "../../styles/Login/login";
import { Title, TextInput, Button } from "react-native-paper";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            type= "e mail"
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
          disabled= {true}
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
          onPress={() => console.log("Pressed")}
        >
          Register
        </Button>
      </View>
    </View>
  );
}
