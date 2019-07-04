import React from "react";
import AppNavigator from "./src/navigation/";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

export default function App() {
  
  const theme = {
    ...DefaultTheme,
    fonts: {
      regular: "Roboto",
      medium: "Roboto",
      light: "Roboto Light",
      thin: "Roboto Thin"
    }
  };
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}
