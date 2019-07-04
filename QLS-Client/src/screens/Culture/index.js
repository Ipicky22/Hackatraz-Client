import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Button, Paragraph, Title, DataTable, Card } from "react-native-paper";
import MenuButton from "../../components/MenuButton";

export default function Culture(props) {
  const [datas, setData] = useState({
    videos: [
      {
        id: 1,
        url: "https://www.youtube.com/watch?v=jVJovoj634c",
        title: "Le pianiste du rap français",
        guests: ["Sofiane Pamart"],
        tags: ["musique", "rap"],
        points: 15
      },
      {
        id: 2,
        url: "https://www.youtube.com/watch?v=GY3hsRoXew8",
        title: "La reine des biscuits personnalisés",
        guests: ["Shanty Baehrel"],
        tags: ["biscuits"],
        points: 15
      },
      {
        id: 3,
        url: "https://www.youtube.com/watch?v=_Yu5H9lnGz4",
        title: "Le passionné de vidéo qui voyage à travers l'Europe",
        guests: ["Grégoire Kengen"],
        tags: ["voyage"],
        points: 15
      },
      {
        id: 4,
        url: "https://www.youtube.com/watch?v=WWIzbJn1des",
        title: "Avoir le courage de ne pas choisir la facilité",
        guests: ["Guillaume Fourdinier"],
        tags: ["agriculture", "environnement", "ecologie"],
        points: 15
      },
      {
        id: 5,
        url: "https://www.youtube.com/watch?v=af27ge1lZiM",
        title: "Prendre la parole pour bâtir un futur plus souhaitable",
        guests: ["Jérôme Ruskin"],
        tags: ["media", "futur", "ecologie"],
        points: 15
      }
    ]
  });
  const [isLoading, setIsLoading] = useState(false);

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
              //  onPress={this.onRegister}
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
