import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logout, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: '', emeil: '' },
  token: null,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload: { token, user } }) => {
        state.user = user;
        state.token = token;

        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;

        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: '', emeil: '' };
        state.token = null;

        state.isLoading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading = true;
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isFetchingCurrentUser = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        state.isFetchingCurrentUser = false;
      })
      .addMatcher(
        isAnyOf(register.pending, login.pending, logout.pending, state => {
          state.isLoading = true;
        })
      );
    // .addMatcher(
    //   isAnyOf(
    //     register.fulfilled,
    //     login.fulfilled,
    //     logout.fulfilled,
    //     fetchCurrentUser.fulfilled,
    //     state => {
    //       state.isLoading = false;
    //       state.error = null;
    //     }
    //   )
    // );
  },
});

export const authReducer = authSlice.reducer;
