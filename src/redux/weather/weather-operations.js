import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'f5b4d7007911006e45cbce4626e9dfa4';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
