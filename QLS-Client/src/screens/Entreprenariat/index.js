import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button, DataTable } from "react-native-paper";
import MenuButton from "../../components/MenuButton";

// export default class Entreprenariat extends React.Component {

//     state = {
//         data: { videos: [] }
//     }

//     componentWillMount = async () => {
//         const store = await this.fetch()
//         this.setState({ data: store })
//     }

//     fetch = async () => {
//         try {
//             let response = await fetch(
//                 "https://lotos-project.herokuapp.com/api/videos/entrepreneuriat",
//                 {
//                     method: "GET",
//                     headers: {
//                         "Accept": "application/json",
//                         "Content-Type": "application/json"
//                     }
//                 }
//             );
//             const json = await response.json()
//             return json

//         } catch (errors) {
//             throw errors;
//         }
//     }

//     render() {
//         const { data } = this.state
//         console.log("Daata2", data)
//         return (
//             <View style={{ flex: 1 }}>
//                 <MenuButton navigation={props.navigation} />
//                 <DataTable>
//                     {
//                         data.videos.map((item, index) => (
//                             <DataTable.Row key={index}>
//                                 <DataTable.Cell>{item.title}</DataTable.Cell>
//                             </DataTable.Row>
//                         )
//                         )
//                     }
//                 </DataTable>
//             </View>
//         )
//     }
// }

export default function Entreprenariat(props) {
  const [data, setData] = useState({ videos: [] });

  test = async () => {
    const store = await this.fetch();
    setData(store);
    console.log(data);
  };

  useEffect(() => {
    test();
  });

  fetch = async () => {
    try {
      let response = await fetch(
        "https://lotos-project.herokuapp.com/api/videos/entrepreneuriat",
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
  };

  return (
    <View style={{ flex: 1 }}>
      <MenuButton navigation={props.navigation} />
      <DataTable>
        {data.videos.map((item, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{item.title}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
}
