import React from 'react';
import { View, Text } from 'react-native'
import MenuButton from '../../components/MenuButton'

export default function Home(props) {

    return (
        <View style={{ flex: 1 }}>
            <MenuButton navigation={props.navigation} />

            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: "#a9daa9" }}>
                    <Text>Div 1</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "#d03030" }}>
                    <Text>Div 2</Text>
                </View>
            </View>
        </View>
    );
}

