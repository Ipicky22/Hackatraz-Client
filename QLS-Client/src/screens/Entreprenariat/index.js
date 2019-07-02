import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import { Button, DataTable } from 'react-native-paper';

export default class Entreprenariat extends React.Component {

    state= {
        data: ""
    }

    componentDidMount = async () => {
        try {
            let response = await fetch(
                "https://lotos-project.herokuapp.com/api/videos/entrepreneuriat",
                {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                }
            );
            const json = await response.json()
            console.log("JSON", json)
            this.setState({ data : json.videos })
            console.log("DATA DIDMOUNT", this.data)
            return json

        } catch (errors) {
            throw errors;
        }
    }

    render() {
        const { data } = this.state

        return (
            <View style={{ flex: 1 }}>
                <Text>Entrepreneuriat</Text>
                <Button icon="add-a-photo" mode="contained" onPress={() => console.log("DATA", data)}>
                    Press me
                </Button>

                <DataTable>

            {
                data.map((item, index) => {
                    <DataTable.Row key={index}>
                        <DataTable.Cell>{item}</DataTable.Cell>
                    </DataTable.Row>
                })
            }

            </DataTable>
            </View>
        )
    }
}

