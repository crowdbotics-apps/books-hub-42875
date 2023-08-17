import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";

const BookScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.bookContainer}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.bookImage} />
        <View style={styles.bookInfoContainer}>
          <Text style={styles.publisherName}>Publisher Name</Text>
          <Text style={styles.publishingDate}>Publishing Date</Text>
          <Text style={styles.bookReviews}>Book Reviews</Text>
          <Text style={styles.bookDescription}>Book Description</Text>
        </View>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center"
  },
  bookContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  bookImage: {
    width: 100,
    height: 150,
    marginRight: 20
  },
  bookInfoContainer: {
    flex: 1
  },
  publisherName: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 10
  },
  publishingDate: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 10
  },
  bookReviews: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 10
  },
  bookDescription: {
    fontSize: 16,
    color: "#666666"
  }
});
export default BookScreen;