
import "../../../src/index.css";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

import banner from "/src/assets/my/web.webp";
import { IoSparklesSharp } from "react-icons/io5";


const Header = () => {

  return (
    <div className="flex flex-col md:flex-row items-center ">
      <div className="md:w-1/2">
        <p className="px-4 py-2 lg:mx-4 my-4 border-2 rounded-full w-56 md:w-64 lg:w-80 border-blue-700 bg-blue-500/20 flex items-center gap-2 text-xs md:text-sm lg:text-lg">
          <IoSparklesSharp />
          Web Development Agency
        </p>
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-normal text-center uppercase font-mono">
          Welcome To{" "}
          <span className="text-purple-700 gradient-text">
            ArtistyCode Studio
          </span>
        </h1>
        <p className="py-4 text-center text-xl">
          Unleashing Creativity, Line by Line of Code, with
          <span className="text-purple-700 font-bold">
            <Typewriter
              options={{
                strings: ["", "Precision", "Innovation", "and Mastery!"],
                autoStart: true,
                loop: true,
              }}
            />{" "}
          </span>
        </p>
        <div className="flex justify-center lg:justify-end">
          <Link to="/about" className="btn btn-outline m-4 border-t-1 border-x-1 border-b-4 neno-button shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-purple-700 rounded-lg bg-blue-500/20 uppercase relative overflow-hidden text-center font-extrabold text-white">
            About Us!
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <img src={banner} className="" />
      </div>
    </div>
  );
};

export default Header;
