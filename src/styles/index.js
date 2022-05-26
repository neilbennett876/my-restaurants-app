import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      width: "100%",
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    restaurantName: {
      fontSize: 30,
      marginVertical: 15,
      fontWeight: '600'
    },
    restaurantCard: {
        width: '100%',
        backgroundColor: '#ffff',
        color: '#444',
        marginVertical: 16,
    },
    cuisine: {
        fontSize: 16,
        fontWeight: '100',
        color: '#ff3333'
    },
    address: {
        fontSize: 14,
        fontWeight: '300',
        color: '#303030'
    }
  })
  