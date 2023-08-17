import axios from "axios"
const bookshubAPI = axios.create({
  baseURL: "https://books-hub-42875.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return bookshubAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return bookshubAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return bookshubAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return bookshubAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return bookshubAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return bookshubAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return bookshubAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return bookshubAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return bookshubAPI.post(`/rest-auth/logout/`)
}
function api_v1_popular_books_list(payload) {
  return bookshubAPI.get(`/api/v1/popular_books/`)
}
function api_v1_popular_books_create(payload) {
  return bookshubAPI.post(`/api/v1/popular_books/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return bookshubAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return bookshubAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function api_v1_popular_books_retrieve(payload) {
  return bookshubAPI.get(`/api/v1/popular_books/${payload.id}/`)
}
function api_v1_popular_books_update(payload) {
  return bookshubAPI.put(`/api/v1/popular_books/${payload.id}/`, payload.data)
}
function api_v1_popular_books_partial_update(payload) {
  return bookshubAPI.patch(`/api/v1/popular_books/${payload.id}/`, payload.data)
}
function api_v1_popular_books_destroy(payload) {
  return bookshubAPI.delete(`/api/v1/popular_books/${payload.id}/`)
}
function rest_auth_password_change_create(payload) {
  return bookshubAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return bookshubAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return bookshubAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_popular_books_list,
  api_v1_popular_books_create,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  api_v1_popular_books_retrieve,
  api_v1_popular_books_update,
  api_v1_popular_books_partial_update,
  api_v1_popular_books_destroy,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
