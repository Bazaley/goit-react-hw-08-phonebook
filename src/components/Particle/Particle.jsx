import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Particle = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          opacity: 0.5,
          color: {
            value: '#4281f7',
          },
        },

        fullScreen: {
          zIndex: -1,
        },
        fpsLimit: 50,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 50,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#0c4752',
          },
          links: {
            color: '#08353b',
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 3,
          },
          collisions: {
            enable: false,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 700,
            },
            value: 70,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 4, max: 15 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
