import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: { grab: { distance: 140, links: { opacity: 1 } } },
        },
        particles: {
          color: { value: "#38bdf8" }, // Accent Color
          links: {
            color: "#38bdf8",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: { enable: true, speed: 1 },
          number: { density: { enable: true, area: 800 }, value: 80 },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticlesBackground;
