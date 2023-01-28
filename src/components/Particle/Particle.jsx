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
      // options={{
      //   fullScreen: {
      //     zIndex: -1,
      //   },
      //   fpsLimit: 1000,
      //   interactivity: {
      //     events: {
      //       onClick: {
      //         enable: true,
      //         mode: 'push',
      //       },
      //       onHover: {
      //         enable: true,
      //         mode: 'repulse',
      //       },
      //       resize: true,
      //     },
      //     modes: {
      //       push: {
      //         quantity: 4,
      //       },
      //       repulse: {
      //         distance: 100,
      //         duration: 0.4,
      //       },
      //     },
      //   },

      //   particles: {
      //     color: {
      //       value: '#0c4752',
      //     },
      //     links: {
      //       color: '#08353b',
      //       distance: 150,
      //       enable: true,
      //       opacity: 0.5,
      //       width: 3,
      //     },
      //     collisions: {
      //       enable: false,
      //     },
      //     move: {
      //       directions: 'none',
      //       enable: true,
      //       outModes: {
      //         default: 'bounce',
      //       },
      //       random: true,
      //       speed: 2,
      //       straight: true,
      //     },
      //     number: {
      //       density: {
      //         enable: true,
      //         area: 700,
      //       },
      //       value: 50,
      //     },
      //     opacity: {
      //       value: 0.5,
      //     },
      //     shape: {
      //       type: 'circle',
      //     },
      //     size: {
      //       value: { min: 4, max: 15 },
      //     },
      //   },
      //   detectRetina: true,
      // }}
      options={{
        fullScreen: {
          zIndex: -1,
        },
        fpsLimit: 1000,

        particles: {
          number: {
            value: 50,

            density: {
              enable: true,
              value_area: 800,
            },
          },

          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 3,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 2 },
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: 'random',
            opacity: 0.4,
            width: 0,
            triangles: {
              enable: true,
              color: '#ffffff',
              opacity: 0.1,
            },
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Particle;
