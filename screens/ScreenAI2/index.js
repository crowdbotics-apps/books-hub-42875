import { bookhubconnector_get_api_v1_popular_books_list } from "../../store/bookhubconnector/bookhubconnector_response_get_getbooklists.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from "react-native";
const books = [{
  name: "Book 1",
  image: "https://tinyurl.com/42evm3m3"
}, {
  name: "Book 2",
  image: "https://tinyurl.com/42evm3m3"
}, {
  name: "Book 3",
  image: "https://tinyurl.com/42evm3m3"
}, {
  name: "Book 4",
  image: "https://tinyurl.com/42evm3m3"
}, {
  name: "Book 5",
  image: "https://tinyurl.com/42evm3m3"
}, {
  name: "Book 6",
  image: "https://tinyurl.com/42evm3m3"
}];

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bookhubconnector_get_api_v1_popular_books_list());
  }, []);
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Popular Books</Text>
      <ScrollView contentContainerStyle={styles.booksContainer}>
        {books.map((book, index) => <View key={index} style={styles.bookItem}>
            <Image source={{
          uri: book.image
        }} style={styles.bookImage} resizeMode="contain" />
            <Text style={styles.bookName}>{book.name}</Text>
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#000"
  },
  booksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 10
  },
  bookItem: {
    width: "48%",
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10
  },
  bookImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 8
  },
  bookName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "black"
  }
});
export default App;