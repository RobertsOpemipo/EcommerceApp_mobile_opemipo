import React, { useState, useContext } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { ProductContext } from "../context/ProductContext";

export default function FilterModal({ visible, onClose }) {
  const { filters, setFilters } = useContext(ProductContext);

  const [tempFilters, setTempFilters] = useState({
    category: filters.category || "",
    minPrice: filters.minPrice === 0 ? "" : filters.minPrice.toString(),
    maxPrice: filters.maxPrice === 1000 ? "" : filters.maxPrice.toString(),
  });

  const applyFilters = () => {
    const finalMinPrice =
      tempFilters.minPrice === "" ? 0 : parseFloat(tempFilters.minPrice);
    const finalMaxPrice =
      tempFilters.maxPrice === "" ? 1000 : parseFloat(tempFilters.maxPrice);

    setFilters({
      category: tempFilters.category,
      minPrice: finalMinPrice,
      maxPrice: finalMaxPrice,
    });
    onClose();
  };

  const resetFilters = () => {
    setTempFilters({
      category: "",
      minPrice: "",
      maxPrice: "",
    });
  };

  const formatPriceInput = (text) => {
    return text.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Filter Products</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Category Filter */}
          <Text style={styles.sectionLabel}>Category</Text>
          {["electronics", "clothing", "books"].map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setTempFilters({ ...tempFilters, category: cat })}
              style={[
                styles.radioButton,
                tempFilters.category === cat && styles.radioButtonSelected,
              ]}
            >
              <Text style={styles.radioText}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}

          {/* Price Range Inputs */}
          <Text style={styles.sectionLabel}>Price Range</Text>
          <View style={styles.priceInputs}>
            <TextInput
              placeholder="Min"
              keyboardType="numeric"
              value={tempFilters.minPrice}
              onChangeText={(text) =>
                setTempFilters({
                  ...tempFilters,
                  minPrice: formatPriceInput(text),
                })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Max"
              keyboardType="numeric"
              value={tempFilters.maxPrice}
              onChangeText={(text) =>
                setTempFilters({
                  ...tempFilters,
                  maxPrice: formatPriceInput(text),
                })
              }
              style={styles.input}
            />
          </View>

          {/* Reset & Apply Buttons */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={resetFilters} style={styles.resetBtn}>
              <Text style={styles.btnText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={applyFilters} style={styles.applyBtn}>
              <Text style={styles.btnText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
  modalContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    padding: 5,
  },
  closeText: {
    fontSize: 20,
    color: "#888",
  },
  sectionLabel: {
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 5,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  radioButtonSelected: {
    backgroundColor: "#64b5f6",
    borderColor: "#1e88e5",
  },
  radioText: {
    fontSize: 14,
  },
  priceInputs: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  resetBtn: {
    flex: 1,
    padding: 12,
    backgroundColor: "#ef5350",
    marginRight: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  applyBtn: {
    flex: 1,
    padding: 12,
    backgroundColor: "#2e7d32",
    marginLeft: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
