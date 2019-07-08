import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, WebView, TouchableOpacity } from 'react-native'
import { Paragraph, Dialog } from 'react-native-paper';

export default function Videos(props) {
    
    const [visible, setVisible] = useState(false)

    _showDialog = () => setVisible(true);

    _hideDialog = () => setVisible(false);

    return (
        <>
        <SafeAreaView style={{ flex: 1, backgroundColor:"#fff"}}>
                <WebView
                    source={{ uri: "https://www.youtube.com/embed/_Yu5H9lnGz4" }}
                    startInLoadingState={true}
                />
        </SafeAreaView>
        <TouchableOpacity activeOpacity={0} title="Press" onPress={this._showDialog} color="#ffff"><Text> </Text></TouchableOpacity>
        <View style={{ flex:1}}>
            <Text>Description</Text>
        </View>

        <Dialog
                visible={visible}
                onDismiss={this._hideDialog}
                style={{ zIndex: 4}}>
            <Dialog.Content>
                <Paragraph>Vous avez gagner </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
                <TouchableOpacity onPress={this._hideDialog} ><Text>Done</Text></TouchableOpacity>
            </Dialog.Actions>
        </Dialog>
        </>
    )

}

var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

