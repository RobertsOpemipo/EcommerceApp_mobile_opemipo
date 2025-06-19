import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function ProductCard({ product }) {
  return (
    <Animated.View
      entering={FadeInDown.delay(100).duration(600)}
      style={styles.card}
    >
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.rating}>⭐ {product.rating}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  price: {
    color: "#2e7d32",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 5,
  },
  rating: {
    color: "#fbc02d",
    fontSize: 14,
  },
});
