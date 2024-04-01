import { Link } from "react-router-dom";
import ni from "../assets/my/1694098009329.webp";
import khan from "../assets/my/1711945474513.webp";
import dev from "../assets/my/developer_11567020.png";

import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Team = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
    focusOnSelect: true,
    slidesToShow: slidesToShow,
  };

  const updateSlidesToShow = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
      setSlidesToShow(3);
    } else if (windowWidth >= 768) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    updateSlidesToShow(); // Initial calculation

    // Update slidesToShow on window resize
    window.addEventListener("resize", updateSlidesToShow);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  return (
    <div>
      <div className="flex justify-center py-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center gradient-text border-b-4 rounded-lg text-white uppercase px-4 border-purple-700">
          Meet the team
        </h1>
      </div>

      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          <div className="h-full px-4 py-4 w-full">
            <div className="card glass service_glow">
              <figure className="p-6">
                <img
                  src={ni}
                  alt="ninazmul"
                  className="rounded-full w-40 card_glow p-1"
                />
              </figure>
              <div className="card-body p-0 items-center text-center">
                <h2 className="card-title gradient-text">N.I. Nazmul</h2>
                <p className="uppercase gradient-text">Founder </p>
                <p className="text-xs gradient-text">(MERN Stack developer)</p>
              </div>
              <div className="card-actions justify-end">
                <Link
                  target="_blank"
                  to="https://ni-portfolio.web.app"
                  className="btn btn-outline m-4 border-t-1 border-x-1 border-b-4 neno-button shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-purple-700 rounded-lg bg-blue-500/20 uppercase relative overflow-hidden text-center font-extrabold text-white"
                >
                  Learn more!
                </Link>
              </div>
            </div>
          </div>
          <div className="h-full px-4 py-4 w-full">
            <div className="card glass service_glow">
              <figure className="p-6">
                <img
                  src={khan}
                  alt="redoy"
                  className="rounded-full w-40 card_glow p-1"
                />
              </figure>
              <div className="card-body p-0 items-center text-center">
                <h2 className="card-title gradient-text">Redoy Khan</h2>
                <p className="uppercase gradient-text">Co-Founder </p>
                <p className="text-xs gradient-text">(Wordpress developer)</p>
              </div>
              <div className="card-actions justify-end">
                <Link
                  target="_blank"
                  to="https://shabur.buyolo.co"
                  className="btn btn-outline m-4 border-t-1 border-x-1 border-b-4 neno-button shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-purple-700 rounded-lg bg-blue-500/20 uppercase relative overflow-hidden text-center font-extrabold text-white"
                >
                  Learn more!
                </Link>
              </div>
            </div>
          </div>
          <div className="h-full px-4 py-4 w-full">
            <div className="card glass service_glow">
              <figure className="p-6">
                <img
                  src={dev}
                  alt="others"
                  className="rounded-full w-40 card_glow p-1"
                />
              </figure>
              <div className="card-body p-0 items-center text-center">
                <h2 className="card-title gradient-text">Other developers</h2>
                <p className="uppercase gradient-text">Developer </p>
                <p className="text-xs gradient-text">
                  (MERN, PHP, WordPress..)
                </p>
              </div>
              <div className="card-actions justify-end">
                <Link
                  className="btn btn-outline m-4 border-t-1 border-x-1 border-b-4 neno-button shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-purple-700 rounded-lg bg-blue-500/20 uppercase relative overflow-hidden text-center font-extrabold text-white"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Learn more!
                </Link>
              </div>
            </div>
            <div className="">
              <dialog
                id="my_modal_1"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box glass card_glow">
                  <h2 className="font-bold text-lg gradient-text">
                    As-salamu alaykum!
                  </h2>
                  <h3 className="py-2 text-start gradient-text font-bold text-xl underline">
                    Meet Our Developers:
                  </h3>
                  <p className=" text-justify gradient-text">
                    At ArtistyCode Studio, our team comprises talented
                    developers specializing in MERN stack, PHP, and Wordpress.
                    From crafting immersive web applications with MERN to
                    building robust solutions with PHP and creating bespoke
                    Wordpress websites, our developers bring expertise and
                    innovation to every project.
                  </p>
                  <h3 className="py-2 text-start gradient-text font-bold text-xl underline">
                    Join Our Team:
                  </h3>
                  <p className=" text-justify gradient-text">
                    Are you a developer seeking opportunities? Submit your
                    information on our <Link to="/jobs">Jobs</Link> page, and if
                    we need your expertise, we'll be in touch. Let's create
                    together!
                  </p>
                  <Link className="btn btn-outline my-4 border-t-1 border-x-1 border-b-4 neno-button shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-purple-700 rounded-lg bg-blue-500/20 uppercase relative overflow-hidden text-center font-extrabold text-white">
                    Apply as a developer
                  </Link>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-outline text-white neno-button font-bold shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-purple-700 rounded-2xl uppercase relative overflow-hidden text-center">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </Slider>
        <div className="absolute top-1/2 left-5 transform -translate-y-1/2 flex space-x-4 z-10">
          <button
            className=" hover:text-black p-2 text-2xl glass rounded-lg"
            onClick={goToPrev}
          >
            <IoIosArrowBack />
          </button>
        </div>
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2 flex space-x-4 z-10">
          <button
            className=" hover:text-black p-2 text-2xl glass rounded-lg"
            onClick={goToNext}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
