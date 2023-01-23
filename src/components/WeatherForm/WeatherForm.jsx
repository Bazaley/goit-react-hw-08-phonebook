import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from 'redux/weather/weather-operations';
import WeatherData from 'components/WeatherData/WeatherData';
import { FormTag, Input, Label } from './WeatherForm.styled';

import { TiWeatherPartlySunny } from 'react-icons/ti';
const WeatherForm = () => {
  const [city, setCity] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchWeather(city));
  };
  return (
    <>
      <FormTag onSubmit={handleSubmit}>
        <Label>
          Weather <TiWeatherPartlySunny size={'30'} />
        </Label>
        <Input
          type="text"
          value={city}
          name="text"
          onChange={e => setCity(e.target.value)}
          placeholder="Input Your City"
        />
        <WeatherData />
      </FormTag>
    </>
  );
};

export default WeatherForm;
