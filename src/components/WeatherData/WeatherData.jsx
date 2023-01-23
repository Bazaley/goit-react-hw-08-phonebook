import { useSelector } from 'react-redux';
import { selectWeather } from 'redux/selectors';

const WeatherData = () => {
  const weather = useSelector(selectWeather);

  return (
    <>
      {weather && (
        <>
          <p>
            {weather.name}, {weather.sys.country}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt=""
          />
          <p>{Math.round(weather.main.temp)} °C </p>
          <p>{weather.weather[0].description} </p>
          <p>Wind Speed : {weather.wind.speed} m/s</p>
        </>
      )}
    </>
  );
};

export default WeatherData;
