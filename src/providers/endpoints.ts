export enum endpoints {
  baseUrl = "http://purplesclothier.com/Gdhotecore",
  login = "/api/v1/hub/user/authenticate-user",
  createMember = "/api/v1/member/create-member",
  updateMember = "/api/v1/member/update-member-details",
  getMember = "/api/v1/member/get-members-by-mobile-number",
  getPublicationCategories = "/api/v1/publication/get-active-publication-categories",
  getPaymentTypes = "/api/v1/payment/get-active-payment-types",
  getPaymentModes = "/api/v1/payment/get-active-payment-modes",
  getCurrencies = "/api/v1/currency/get-active-currencies",

  auth = "/api/v1/auth/token"
}
