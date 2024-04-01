import "../../../src/index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import Slider from "../Home/Slider";
import acLogo from "/src/assets/Ac logo white text.webp";

import img from "../../assets/my/Untitled design.webp";
import { Link } from "react-router-dom";
import Team from "../Team";
const About = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="flex-1">
            <img
              src={img}
              className="border-2 p-1 border-purple-700 img_glow "
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-center pb-4">
              <h1
                data-aos="fade-up"
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg text-white uppercase px-4 border-purple-700 gradient-text"
              >
                About Us
              </h1>
            </div>
            <div>
              <p className="gradient-text text-justify">
                Welcome to ArtistyCode Studio, where creativity meets innovation
                to shape remarkable digital experiences.
              </p>
              <p className="gradient-text text-justify">
                At ArtistyCode, we're more than just a team of developers –
                we're storytellers, problem-solvers, and visionaries. Founded on
                the belief that every project is an opportunity to create
                something extraordinary, we're passionate about pushing
                boundaries and exceeding expectations.
              </p>

              <div className="py-2">
                <h2 className="gradient-text text-xl font-bold">
                  Our Mission:
                </h2>
                <p className="gradient-text text-justify">
                  To empower businesses and individuals with cutting-edge
                  digital solutions that inspire, engage, and drive success.
                </p>
              </div>
              <div className="py-2">
                <h2 className="gradient-text text-xl font-bold">
                  Our Approach:
                </h2>
                <p className="gradient-text text-justify">
                  We believe in collaboration, transparency, and continuous
                  improvement. By fostering a culture of creativity and
                  innovation, we ensure that every project benefits from fresh
                  perspectives and bold ideas.
                </p>
              </div>
              <div className="py-2">
                <h1 className="text-2xl gradient-text font-bold">
                  What Sets Us Apart:
                </h1>
                <div className="py-2">
                  <h2 className="gradient-text text-xl font-bold">
                    Expertise:
                  </h2>
                  <p className="gradient-text text-justify">
                    Our team consists of seasoned professionals with expertise
                    in a wide range of technologies and industries, ensuring
                    that we can tackle any challenge with confidence and
                    competence.
                  </p>
                </div>
                <div className="py-2">
                  <h2 className="gradient-text text-xl font-bold">
                    Client-Centric Focus:
                  </h2>
                  <p className="gradient-text text-justify">
                    We prioritize the needs and goals of our clients above all
                    else, striving to deliver solutions that not only meet but
                    exceed their expectations.
                  </p>
                </div>
                <div className="py-2">
                  <h2 className="gradient-text text-xl font-bold">
                    Innovation:
                  </h2>
                  <p className="gradient-text text-justify">
                    We're not content with the status quo. We're constantly
                    exploring new technologies, techniques, and trends to stay
                    ahead of the curve and deliver cutting-edge solutions.
                  </p>
                </div>
                <div className="py-2">
                  <h2 className="gradient-text text-xl font-bold">
                    Quality Assurance:
                  </h2>
                  <p className="gradient-text text-justify">
                    We hold ourselves to the highest standards of quality and
                    excellence, ensuring that every project we undertake is
                    executed with precision and attention to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team></Team>
      <div>
        <div className="py-4">
          <h2 className="gradient-text text-3xl font-bold text-center">Get in Touch:</h2>
          <p className="gradient-text text-justify">
            Ready to embark on a digital journey with us? Whether you're a
            business looking to elevate your online presence or an individual
            with a bold idea, we'd love to hear from you. Get in touch today and
            let's create something extraordinary together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
