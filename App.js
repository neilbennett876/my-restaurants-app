import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  Image,
  Button
} from "react-native";
import { useEffect, useState } from "react";
import styles from "./src/styles";
import RestaurantCard from "./src/components/RestaurantCard";

const bgimage = {
  uri: "https://png.pngtree.com/background/20210709/original/pngtree-food-western-food-steak-tomato-picture-image_941801.jpg",
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
      <ImageBackground
        resizeMode="cover" source={bgimage} style={styles.container}>
        <ScrollView>
          {allRestaurants ? (
            allRestaurants?.map((singleRest) => (
              <RestaurantCard key={singleRest.id} singleRest={singleRest}/>
            ))
          ) : (
            <ActivityIndicator size="large" color="orange" />
          )}
          <Text style={{ color: 'white', marginBottom: 20 }}>Hey class whats up test</Text>
          <StatusBar style="auto" />
        </ScrollView>
        <Button title="Press me"
        color="#f194ff" />
      </ImageBackground>
    </View>
  );
}

