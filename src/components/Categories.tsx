import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

const commonCategories = [
  {
    name: "Burger",
    imageUrl: require("../assets/images/burger.png"),
  },
  {
    name: "Pizza",
    imageUrl: require("../assets/images/pizza.png"),
  },
  {
    name: "Dessert",
    imageUrl: require("../assets/images/cake.png"),
  },
  {
    name: "Pasta",
    imageUrl: require("../assets/images/pasta.png"),
  },
  {
    name: "Drinks",
    imageUrl: require("../assets/images/smoothies.png"),
  },
  {
    name: "Steak",
    imageUrl: require("../assets/images/steak.png"),
  },
];

interface CategoriesProps {
  term: string;
  setTerm: (item: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  term,
  setTerm,
}: CategoriesProps) => {
  return (
    <FlatList
      data={commonCategories}
      renderItem={({ item, index }) => {
        return (
          <CategoryItem
            name={item.name}
            imageUrl={item.imageUrl}
            index={index}
            active={item.name === term}
            changeMeal={() => setTerm(item.name)}
          />
        );
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(category) => category.name}
    />
  );
};

export default Categories;
