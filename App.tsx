import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useState } from "react";
import Categories from "./src/components/Categories";
import Header from "./src/components/Header";
import Restaurants from "./src/components/Restaurants";
import Search from "./src/components/Search";

const App = () => {
  const [term, setTerm] = useState("Burger");

  return (
    <View>
      <Header />
      <Search setTerm={setTerm} />
      <View>
        <Categories term={term} setTerm={setTerm} />
      </View>
      <Restaurants />
      <StatusBar />
    </View>
  );
};

export default App;
