import { StyleSheet, Text, View } from "react-native";
import React from "react";
import yelp from "../api/yelp";

const Restaurants = () => {
  const searchRestaurants = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 1,
        term: "Dessert",
        location: "Toronto",
      },
    });
    console.log(response);
  };
  searchRestaurants();

  return (
    <View style={styles.containter}>
      <Text style={styles.header}>Top Restaurants</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    height: 100,
  },
});

export default Restaurants;
