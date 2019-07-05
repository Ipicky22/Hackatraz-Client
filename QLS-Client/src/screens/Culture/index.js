import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Button, Paragraph, Title, DataTable, Card } from "react-native-paper";
import MenuButton from "../../components/MenuButton";

export default function Culture(props) {
  const [datas, setData] = useState({
    videos: [
      {
        id: 6,
        url: "https://www.youtube.com/watch?v=GxldQpFTlrQ",
        title: "Le français le plus lu au monde ",
        guests: ["Marc Levy"],
        tags: ["écriture"],
        points: 15
      },
      {
        id: 7,
        url: "https://www.youtube.com/watch?v=Lkh21Tx6sQw",
        title: "Woman of the moon",
        guests: ["Fatoumata Kebe "],
        tags: ["astronomie", "science", "lune"],
        points: 15
      },
      {
        id: 8,
        url: "https://www.youtube.com/watch?v=UJDFGCjKO4M",
        title: "Un nobel face aux climatosceptiques",
        guests: ["Jean Jouzel"],
        tags: ["climat"],
        points: 15
      },
      {
        id: 9,
        url: "https://www.youtube.com/watch?v=pPCr1MOjZXI",
        title: "Toujours résistant ",
        guests: ["Edgar Morin", "François Cluzet"],
        tags: ["resistance", "sociologie", "philosophie"],
        points: 15
      },
      {
        id: 10,
        url: "https://www.youtube.com/watch?v=Kn4ROtw3tyM",
        title: "Boxe avec le destin",
        guests: ["Sarah Ourahmoune"],
        tags: ["sport", "boxe"]
      }
    ]
  });
  const [isLoading, setIsLoading] = useState(false);
  goToVideo = () => {
    props.navigation.navigate("Video");
  };
  // async function fetch() {
  //   const store = await functions.fetchByCategory("culture");
  //   setData(store);
  // }
  // fetch datas in videos
  // useEffect(() => {
  //   setIsLoading(true);
  //   //fetch();
  //   setIsLoading(false);
  //   console.log(datas);
  // }, [fetch()]);
  return (
    <View style={{ flex: 1 }}>
      <MenuButton navigation={props.navigation} />
      <Title> Culture </Title>
      <FlatList
        data={datas.videos}
        renderItem={({ item, index }) => {
          const { id, title, url, tags } = item;
          return (
            <TouchableOpacity
              onPress={console.log("hello")}
              style={{ mardin: 0 }}
            >
              <Card key={index}>
                <Card.Content>
                  <Text style={{ fontWeight: "bold", alignItems: "center" }}>
                    Title : {title}
                  </Text>
                  <Paragraph>Url: {url}</Paragraph>
                  <Text style={{ fontWeight: "bold" }}>Tags:</Text>
                  {tags.map(item => (
                    <Text right>{item}</Text>
                  ))}
                </Card.Content>
              </Card>
            </TouchableOpacity>
          );
        }}
      />

      {/* {isLoading ? (
        <Text>Loading ... </Text>
      ) : (
        <FlatList
          data={datas.videos}
          renderItem={({ item }) => {
            const { id } = item;
            return (
            <Text> {id } </Text>
            );
          }}
        />
      )} */}
    </View>
  );
}
