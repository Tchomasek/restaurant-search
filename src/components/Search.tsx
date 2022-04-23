import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { elevation } from "../common/styles";
import { useState } from "react";

interface SearchProps {
  setTerm: (input: string) => void;
}

const Search: React.FC<SearchProps> = ({ setTerm }: SearchProps) => {
  const [input, setInput] = useState("");
  const handleEndEditing = () => {
    if (!input) {
      return;
    }
    setTerm(input);
    setInput("");
  };

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        placeholder="Restaurants, food"
        style={styles.input}
        onChangeText={(text) => {
          setInput(text);
        }}
        onEndEditing={handleEndEditing}
        value={input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 40,
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Search;
