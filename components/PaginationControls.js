import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function PaginationControls({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  return (
    <View style={styles.pagination}>
      <TouchableOpacity
        disabled={currentPage === 1}
        onPress={() => setCurrentPage((prev) => prev - 1)}
        style={[styles.pageButton, currentPage === 1 && styles.disabledButton]}
      >
        <Text style={styles.pageButtonText}>← Prev</Text>
      </TouchableOpacity>

      <Text style={styles.pageInfo}>
        Page {currentPage} of {totalPages}
      </Text>

      <TouchableOpacity
        disabled={currentPage === totalPages}
        onPress={() => setCurrentPage((prev) => prev + 1)}
        style={[
          styles.pageButton,
          currentPage === totalPages && styles.disabledButton,
        ]}
      >
        <Text style={styles.pageButtonText}>Next →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  pageButton: {
    backgroundColor: "#2e7d32",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: "#aaa",
  },
  pageButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  pageInfo: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});
