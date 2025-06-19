const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 79.99,
    category: "electronics",
    image: require("../assets/images/sam-grozyan-yDC3NXxrtyc-unsplash.jpg"),
    rating: 4.5,
  },
  {
    id: 2,
    title: "T-Shirt",
    price: 19.99,
    category: "clothing",
    image: require("../assets/images/anomaly-WWesmHEgXDs-unsplash.jpg"),
    rating: 4.2,
  },
  {
    id: 3,
    title: "Smartphone",
    price: 699.99,
    category: "electronics",
    image: require("../assets/images/michail-sapiton-EaAmc9URr_8-unsplash.jpg"),
    rating: 4.7,
  },
  {
    id: 4,
    title: "Book - JavaScript Basics",
    price: 29.99,
    category: "books",
    image: require("../assets/images/daria-nepriakhina-xY55bL5mZAM-unsplash.jpg"),
    rating: 4.8,
  },
];

export const fetchProducts = () => Promise.resolve(products);
