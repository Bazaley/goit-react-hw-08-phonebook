import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from './weather-operations';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchWeather.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(fetchWeather.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const weatherReducer = weatherSlice.reducer;
