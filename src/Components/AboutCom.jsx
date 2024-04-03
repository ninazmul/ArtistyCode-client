import { useEffect } from "react";
import logo from "../assets/my/Ac logo white text.webp"
import Aos from "aos";
import { Link } from "react-router-dom";

const AboutCom = () => {
    useEffect(() => {
      Aos.init({
        easing: "ease-out-quart",
        delay: 0,
        duration: 750,
      });
    }, []);
    return (
      <div>
        <div data-aos="fade-left">
          <div className="flex justify-center pt-10 pb-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg text-white uppercase px-4 border-purple-700 gradient-text">
              About Us
            </h1>
          </div>
          <div className="flex items-center gap-4 flex-col-reverse md:flex-row">
            <div className="w-2/3 md:w-1/3">
              <Link to="/about">
                <img src={logo} alt="" className="" />
              </Link>
            </div>
            <div className="flex-1">
              <p className="gradient-text text-justify">
                Welcome to ArtistyCode Studio, where creativity meets innovation
                to shape remarkable digital experiences.
              </p>
              <p className="gradient-text text-justify">
                At ArtistyCode, we're more than just a team of developers –
                we're storytellers, problem-solvers, and visionaries. Founded on
                the belief that every project is an opportunity to create
                something extraordinary, we're passionate about pushing
                boundaries and exceeding expectations..
              </p>
              <Link
                to="/about"
                className="btn btn-outline border-t-1 border-x-1 border-b-4 neno-button shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-purple-700 rounded-lg bg-blue-500/20 uppercase relative overflow-hidden text-center font-extrabold text-white my-4"
              >
                Learn more!
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutCom;