import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Navbar/Footer";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import ScrollUpButton from "react-scroll-up-button";
import { useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Root = () => {
  const location = useLocation();
  const [init, setInit] = useState(false);
  const noNavFooter =
    location.pathname.includes("signIn") ||
    location.pathname.includes("signUp") ||
    location.pathname.includes("dashboard");

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#0062ff75", "#00e5ff"],
        },
        links: {
          color: "#9067f6ab",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 50,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "square",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      preset: "bigCircles",
      detectRetina: true,
    }),
    []
  );

  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        />
      )}
      {!init && (
        <div className="absolute inset-0 bg-blue-300 z-20">
          <div className="absolute inset-0 top-52 flex justify-center">
            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#8e00fb"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      )}
      <div className="relative z-10">
        {noNavFooter || <Navbar />}
        <div className="min-h-screen pt-14 px-4">
          <Outlet />
        </div>
        {noNavFooter || <Footer />}

        {/* "Go to top" button */}
        <ScrollUpButton
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            padding: "0.25rem",
            width: "2rem",
            height: "2rem",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "#d459a8",
            borderRadius: "50%",
            cursor: "pointer",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
    </div>
  );
};

export default Root;
