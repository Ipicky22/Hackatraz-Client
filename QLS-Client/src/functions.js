import { AsyncStorage } from "react-native";
import { Location, Permissions } from "expo";
import ENV from "../env";

export default (Func = {
  fetch: async function(url, method, body = {}, auth = null) {
    try {
      let response = await fetch(url, {
        method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: auth
        },
        body
      });
      return response;
    } catch (errors) {
      throw errors;
    }
  },
  setAsyncStorage: async function(email, password, token) {
    try {
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("password", password);
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      throw error;
    }
  },
  fetchByCategory: async url => {
    try {
      let response = await fetch(
        `https://lotos-project.herokuapp.com/api/videos/${url}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      );
      const json = await response.json();
      return json;
    } catch (errors) {
      console.log(errors.messages);
      throw errors;
    }
  }
});
