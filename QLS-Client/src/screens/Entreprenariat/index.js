import React, { useState, useEffect } from "react";
import { View, Text ,FlatList} from "react-native";
import { Button, DataTable } from "react-native-paper";
import MenuButton from "../../components/MenuButton";
import functions from "../../functions";

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
//                 <MenuButton navigation={this.props.navigation} />
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
  const [datas, setData] = useState({ videos: [] });
  async function fetch() {
    const store = await functions.fetchByCategory("entrepreneuriat");
    console.log(store);
    setData(store);
  }
  useEffect(() => {
    fetch();
  }, fetch);
  return (
    <View style={{ flex: 1 }}>
      <MenuButton navigation={props.navigation} />
      <FlatList
        data={datas.videos}
        renderItem={
          (items) => {
            <Text> {items.id}</Text>
          }
        }
      />
    </View>
  );
}
