import React from "react"
import { View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { setRecoveryProps } from "expo/build/ErrorRecovery/ErrorRecovery";

export default function MenuButton(props) { 

    return (
        <View style={{ height:  80, justifyContent: "center" }}>
            <Icon 
            name="bars"
            color="#000"
            size={24}
            style={{zIndex:9, position: "absolute", top: 40, left: 20}}
            onPress= { () => props.navigation.toggleDrawer()}
        />
        </View>
    )
}
