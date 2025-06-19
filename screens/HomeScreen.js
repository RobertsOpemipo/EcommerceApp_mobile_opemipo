import React, { useContext, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import FilterModal from "../components/FilterModal";
import SortOptions from "../components/SortOptions";
import PaginationControls from "../components/PaginationControls";

export default function HomeScreen() {
  const {
    products,
    currentPage,
    totalPages,
    setCurrentPage,
    sortOption,
    setSortOption,
  } = useContext(ProductContext);

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isSortVisible, setIsSortVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Products</Text>

      {/* Control Buttons */}
      <View style={styles.controlButtons}>
        <TouchableOpacity
          onPress={() => setIsFilterVisible(true)}
          style={styles.filterBtn}
        >
          <Text style={styles.btnText}>🔧 Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsSortVisible(!isSortVisible)}
          style={styles.sortBtn}
        >
          <Text style={styles.btnText}>⇅ Sort</Text>
        </TouchableOpacity>
      </View>

      {/* Sort Options Dropdown */}
      {isSortVisible && (
        <SortOptions
          sortOption={sortOption}
          setSortOption={setSortOption}
          close={() => setIsSortVisible(false)}
        />
      )}

      {/* Product List */}
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />

      {/* Pagination Controls */}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

      {/* Modals */}
      <FilterModal
        visible={isFilterVisible}
        onClose={() => setIsFilterVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#2e7d32",
  },
  controlButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  filterBtn: {
    backgroundColor: "#ffeb3b",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  sortBtn: {
    backgroundColor: "#64b5f6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  btnText: {
    color: "#000",
    fontWeight: "600",
  },
  listContainer: {
    paddingBottom: 20,
  },
});
