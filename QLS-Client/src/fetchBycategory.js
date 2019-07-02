import { AsyncStorage } from "react-native";
//import { Location, Permissions } from 'expo';
//import ENV from '../env'

export default (FetchByCategory = {
  fetch: async (url) => {
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
      throw errors;
    }
  }
});
