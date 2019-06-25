import React from 'react';
import { View, Text } from 'react-native'
import MenuButton from '../../components/MenuButton'

export default function Home(props) {

    return (
        <View style={{ flex: 1 }}>
            <MenuButton navigation={props.navigation} />

            <View style={{ alignItems: "center", marginTop: 50}}>
                <Text style={{ fontSize: 24 }}>Select your category</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: -100 }}>
                <View style={{ backgroundColor: "#a9daa9", height: "20%", width: "80%", justifyContent: "center", alignItems: "center", marginVertical: 25, borderRadius: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.58, shadowRadius: 16.00, elevation: 24 }}>
                    <Text>Entreprenariat</Text>
                </View>
                <View style={{ backgroundColor: "#f3504A", height: "20%", width: "80%", justifyContent: "center", alignItems: "center", marginVertical: 25, borderRadius: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.58, shadowRadius: 16.00, elevation: 24 }}>
                    <Text>Culture</Text>
                </View>
            </View>
        </View>
    );
}

