import { View, Text, Image } from "react-native";
import styles from "../styles";

export default function RestaurantCard({ singleRest }) {
    return(
        <View style={styles.restaurantCard}>
        <Text style={styles.restaurantName} key={singleRest.id}>
          {singleRest.name} / {singleRest.cusisine}
        </Text>
        <Text>
            {singleRest.address}
        </Text>
        <Image source={{ uri: singleRest.image }} style={{ width: '100%', height: 100 }} />
        </View>


    )
}