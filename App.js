import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground, ScrollView, Image } from "react-native";
import { useEffect, useState } from "react";


const image = {
  uri: "https://png.pngtree.com/background/20210709/original/pngtree-food-western-food-steak-tomato-picture-image_941801.jpg"
};

export default function App() {
  const [allRestaurants, setAllRestaurants] = useState();
  useEffect(async () => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://my-first-firestore-nb.web.app/restaurants"
        );
        const data = await response.json();
        setAllRestaurants(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="cover" source={image} style={styles.container}>
        <ScrollView>
        {allRestaurants ? (
          allRestaurants?.map((res) => <Text style={styles.restaurantName} key={res.id}>{res.name}</Text>)
          ) : (
            <ActivityIndicator size="large" color="orange" />
            )}
        <Text>Do you refresh?</Text>
        <StatusBar style="auto" />
            </ScrollView>
            </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  restaurantName: {
    color: 'white',
    fontSize: 70,
  }
});
