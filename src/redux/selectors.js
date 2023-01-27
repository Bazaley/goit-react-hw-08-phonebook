export const selectContacts = state => state.contacts.contacts;
export const selectFilterContact = state => state.filter.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user;
export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;
export const selectWeather = state => state.weather.data;
