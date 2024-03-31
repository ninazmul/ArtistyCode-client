import { BsFacebook } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
// import { TfiEmail } from "react-icons/tfi";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";

import "../../../src/index.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";

import banner from "/src/assets/my/banner img.webp";
import img from "/src/assets/my/banner 2.webp";

const Header = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center p-4">
        <div className="">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center uppercase font-mono">
            Welcome To{" "}
            <span className="text-purple-700 gradient-text">
              ArtistyCode Studio
            </span>
          </h1>
          <p className="py-4 text-center text-xl">
            Versatile artist with skills in{" "}
            <span className="text-purple-700 font-bold">
              <Typewriter
                options={{
                  strings: ["", "Programming", "Graphics", "Voice"],
                  autoStart: true,
                  loop: true,
                }}
              />{" "}
            </span>
          </p>
          <div className="flex space-x-2 text-center justify-center items-center">
            <a
              href="https://www.facebook.com/nazmulsaw"
              className="text-purple-700 hover:text-purple-700 rounded-full glow p-2"
            >
              <BsFacebook className="text-[28px]"></BsFacebook>
            </a>
            <a
              href="https://github.com/ninazmul"
              className="text-purple-700 hover:text-purple-700 rounded-full glow p-2"
            >
              <AiFillGithub className="text-[28px]"></AiFillGithub>
            </a>
            {/* <a
                href="#email"
                className="text-purple-700 hover:text-purple-700 rounded-full glow p-2"
              >
                <TfiEmail className="text-[28px]"></TfiEmail>
              </a> */}
            <a
              href="https://www.linkedin.com/in/ninazmul"
              className="text-purple-700 hover:text-purple-700 rounded-full glow p-2"
            >
              <AiFillLinkedin className="text-[28px] rounded-full"></AiFillLinkedin>
            </a>
            <a
              href="https://www.fiverr.com/ninazmul"
              className="text-purple-700 hover:text-purple-700 rounded-full glow p-2"
            >
              <TbBrandFiverr className="text-[28px] rounded-full"></TbBrandFiverr>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01369d0d10ed1780e4"
              className="text-purple-700 hover:text-purple-700 rounded-full glow p-2"
            >
              <SiUpwork className="text-[28px] rounded-full" />
            </a>
          </div>
        </div>
        <div className="">
          <img src={banner} className="w-96" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-10 p-4">
        <div className="">
          <div className="flex justify-center">
            <h1
              data-aos="fade-right"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg text-white uppercase px-4 border-purple-700"
            >
              ABOUT ME
            </h1>
          </div>
          <p data-aos="fade-right" className="py-2 text-justify">
            "As-salamu alaykum, I am a multi-talented creative professional with
            expertise in graphic design, voice-over and dubbing, video editing,
            and Website development. With years of experience and a keen eye for
            detail, I deliver high-quality and engaging content that exceeds
            expectations. My goal is to help businesses and individuals achieve
            their communication and marketing objectives through visually
            stunning and compelling designs, professional voice-overs and
            dubbing, engaging video edits, and Web development. Let's work
            together to bring your ideas to life.
          </p>
          <Link to="/about" className="">
            <button
              data-aos="fade-right"
              className="neno-button font-bold shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-purple-700 rounded-lg py-2 px-4 uppercase relative overflow-hidden text-center"
            >
              RESUME
            </button>
          </Link>
        </div>
        <div className="" data-aos="fade-up">
          <img src={img} className="rounded-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;