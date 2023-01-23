import React from 'react';
import Particle from 'components/Particle/Particle';
import { Section } from 'components/Section/Section';
import WeatherForm from 'components/WeatherForm/WeatherForm';

import { Box, Paragraph } from './Home.styled';

const Home = () => {
  return (
    <Section title="Welcome to your personal contact book">
      <Box>
        <WeatherForm />
        <Paragraph>
          Create your unique account or use the login button to access your
          contact book
        </Paragraph>
        <Particle />
      </Box>
    </Section>
  );
};

export default Home;
