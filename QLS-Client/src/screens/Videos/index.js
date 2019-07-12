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
        <View style={{ flex:1, backgroundColor:"#fff", marginHorizontal: 16}}>
            <Text style={{ fontWeight: "600"}}>Le passionné de vidéo qui voyage à travers l'Europe</Text>
            <Text>de Grégoire Kengen</Text>
            <View style={{ borderRadius: 20, backgroundColor:"#a9daa9", marginVertical: 4, marginTop: 4}}>
                <Text style={{ fontWeight: "700", marginLeft: 8 }}>Tag : Voyage</Text>
            </View>
            <View style={{ borderRadius: 20, backgroundColor:"#f3504A", marginVertical: 4}}>
                <Text style={{ fontWeight: "700", marginLeft: 8 }}>15 Points</Text>
            </View>
        </View>

        <Dialog
                visible={visible}
                onDismiss={this._hideDialog}
                style={{ zIndex: 4}}>
            <Dialog.Content>
                <Paragraph>Vous avez gagné les éléments suivants :</Paragraph>
                <View style={{ borderRadius: 20, backgroundColor:"#a9daa9", marginVertical: 4, marginTop: 4}}>
                    <Text style={{ fontWeight: "500", marginLeft: 8 }}>Tag : Voyage</Text>
                </View>
                <View style={{ borderRadius: 20, backgroundColor:"#f3504A", marginVertical: 4}}>
                    <Text style={{ fontWeight: "500", marginLeft: 8 }}>15 Points</Text>
                </View>
                <View style={{ borderRadius: 20, backgroundColor:"#FB9C01", marginVertical: 4}}>
                    <Text style={{ fontWeight: "500", marginLeft: 8 }}>Le niveau suivant est acquis dans 30 points</Text>
                </View>
                <View style={{ marginVertical: 4}}>
                    <Text style={{ textAlign: "center"}}>🙈🙉🙊</Text>
                </View>
            </Dialog.Content>
            <Dialog.Actions>
                <TouchableOpacity onPress={this._hideDialog} ><Text>OK</Text></TouchableOpacity>
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

