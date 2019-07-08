import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import MenuButton from '../../components/MenuButton'

export default function Home(props) {

    onEntreprenariat = () => {
        props.navigation.navigate('Entreprenariat')
    }

    onCulture = () => {
        props.navigation.navigate('Culture')
    }

    return (
        <View style={{ flex: 1 }}>
            <MenuButton navigation={props.navigation} />

            <View style={{ alignItems: "center", marginTop: 50 }}>
                <Text style={{ fontSize: 24 }}>Select your category</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: -100 }}>
                <TouchableOpacity onPress={this.onEntreprenariat} style={{ backgroundColor: "#a9daa9", height: "20%", width: "80%", justifyContent: "center", alignItems: "center", marginVertical: 25, borderRadius: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.58, shadowRadius: 16.00, elevation: 24 }}>
                    <Text style={{ fontSize: 16, fontWeight: "400" }}>Entreprenariat</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onCulture} style={{ backgroundColor: "#f3504A", height: "20%", width: "80%", justifyContent: "center", alignItems: "center", marginVertical: 25, borderRadius: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.58, shadowRadius: 16.00, elevation: 24 }}>
                    <Text style={{ fontSize: 16, fontWeight: "400" }}>Culture</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

