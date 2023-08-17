import React from "react"
import { bookhubconnector_get_api_v1_popular_books_list } from "../../store/bookhubconnector/bookhubconnector_response_get_getbooklists.slice.js"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native"

const App = ({ navigation }) => {
  const dispatch = useDispatch()
  const { entities } = useSelector(
    state => state.Bookhubconnector_response_get_getbooklists
  )

  useEffect(() => {
    dispatch(bookhubconnector_get_api_v1_popular_books_list())
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Popular Books</Text>
      <ScrollView contentContainerStyle={styles.booksContainer}>
        {entities?.map((book, index) => (
          <TouchableOpacity
            key={index}
            style={styles.bookItem}
            onPress={() => navigation.navigate("ScreenAI3", { data: book })}
          >
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=2000"
              }}
              style={styles.bookImage}
              resizeMode="contain"
            />
            <Text style={styles.bookName}>{book.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

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
    // marginBottom: 16,
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
    borderRadius: 10,
    paddingBottom: 15,
    alignItems: "center",
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
    width: "100%",
    height: 150,
    borderRadius: 8
  },
  bookName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "black"
  }
})
export default App
