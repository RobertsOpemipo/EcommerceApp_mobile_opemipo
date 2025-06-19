import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SortOptions({ sortOption, setSortOption, close }) {
  const handleSort = (option) => {
    setSortOption(option);
    close();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleSort("price_asc")}
        style={styles.option}
      >
        <Text style={[sortOption === "price_asc" && styles.selected]}>
          Price: Low to High
        </Text>
        {sortOption === "price_asc" && <Text style={styles.checkmark}>✔</Text>}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSort("price_desc")}
        style={styles.option}
      >
        <Text style={[sortOption === "price_desc" && styles.selected]}>
          Price: High to Low
        </Text>
        {sortOption === "price_desc" && <Text style={styles.checkmark}>✔</Text>}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSort("rating")}
        style={styles.option}
      >
        <Text style={[sortOption === "rating" && styles.selected]}>
          Top Rated
        </Text>
        {sortOption === "rating" && <Text style={styles.checkmark}>✔</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  selected: {
    fontWeight: "bold",
    color: "#2e7d32",
  },
  checkmark: {
    color: "#2e7d32",
  },
});
