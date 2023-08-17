import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";

const BookScreen = () => {
  return <SafeAreaView style={styles.container}>
      
      <View style={styles.bookContainer}>
        <View style={styles.header}>
        <Image source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFEmS3xQVIFPFh-JPkxXOuY059M3RGTwdkg&usqp=CAU"
        }} style={styles.backIcon} />
        <Text style={styles.headerText}>Book Title</Text>
      </View>
        <View style={styles.jIjDQRcf}>
         <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.bookImage} />
        <View style={styles.bookInfoContainer}>
          <Text style={styles.publisherName}>Publisher Name</Text>
          <Text style={styles.publishingDate}>Publishing Date</Text>
          <Text style={styles.bookReviews}>Book Reviews</Text>
        </View>
        </View>
       

          <Text style={styles.bookDescription}> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>
        
        
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
  header: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 20,
    width: '90%'
  },
  backIcon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 70
  },
  bookContainer: {
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
    color: "#666666",
    textAlign: 'center',
    marginTop: 30
  },
  jIjDQRcf: {
    flexDirection: "row"
  }
});
export default BookScreen;