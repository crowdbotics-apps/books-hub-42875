import axios from "axios";
import { BOOK_HUB_CONNECTOR_TOKEN } from "react-native-dotenv";
const bookhubconnector = axios.create({
  baseURL: "https://books-hub-42875.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${BOOK_HUB_CONNECTOR_TOKEN}`
  }
});

function bookhubconnector_get_api_v1_popular_books_list(payload) {
  return bookhubconnector.get(`/api/v1/popular_books/`);
}

export const apiService = {
  bookhubconnector_get_api_v1_popular_books_list
};