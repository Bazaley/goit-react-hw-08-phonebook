import { useSelector } from 'react-redux';
import { selectWeather } from 'redux/selectors';
import { Box, Paragraph, ParagraphTemp, BoxTemp } from './WeatherData.styled';

const WeatherData = () => {
  const weather = useSelector(selectWeather);

  return (
    <>
      {weather && (
        <>
          <Box>
            <Paragraph>
              {weather.name}, {weather.sys.country}
            </Paragraph>
            <BoxTemp>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt=""
              />
              <ParagraphTemp>{Math.round(weather.main.temp)} °C </ParagraphTemp>
            </BoxTemp>

            <Paragraph>{weather.weather[0].description} </Paragraph>
            <Paragraph>Wind Speed : {weather.wind.speed} m/s</Paragraph>
          </Box>
        </>
      )}
    </>
  );
};

export default WeatherData;
