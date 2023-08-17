import React from "react"
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from "react-native"

const BookScreen = ({ route, navigation }) => {
  const { data } = route?.params

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bookContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFEmS3xQVIFPFh-JPkxXOuY059M3RGTwdkg&usqp=CAU"
              }}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>{data?.title}</Text>
        </View>
        <View style={styles.jIjDQRcf}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=2000"
            }}
            style={styles.bookImage}
          />
          <View style={styles.bookInfoContainer}>
            <Text style={styles.publisherName}>
              Publisher Name: {data?.publisher_name}
            </Text>
            <Text style={styles.publishingDate}>
              Publishing Date: {data?.published_date}
            </Text>
            <Text style={styles.bookReviews}>
              Book Reviews: {data?.reviews}
            </Text>
          </View>
        </View>
        <Text style={styles.bookDescription}> {data?.description}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 20,
    width: "90%"
  },
  backIcon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 70,
    color: "#000"
  },
  bookContainer: {
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
    marginRight: 20,
    backgroundColor: "red"
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
    color: "#666666",
    textAlign: "center",
    marginTop: 30
  },
  jIjDQRcf: {
    flexDirection: "row"
  }
})
export default BookScreen
