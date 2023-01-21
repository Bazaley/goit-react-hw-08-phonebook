export const selectContacts = state => state.contacts.contacts;
export const selectFilterContact = state => state.filter.filter;
export const selectRenameContact = state => state.contacts.contactUpdate;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user;
export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
