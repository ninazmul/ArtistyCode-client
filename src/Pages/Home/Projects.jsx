import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import useItem from "../Portfolio/useItem";
import ItemCart from "../Portfolio/ItemCart";

const Projects = () => {
  const [item] = useItem();

  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
    focusOnSelect: true,
    slidesToShow: slidesToShow,
    rtl: true,
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
      <div className="flex justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg gradient-text uppercase px-4 border-purple-700">
          Our Projects
        </h1>
      </div>
      <div>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {item.map((item) => (
              <ItemCart key={item.id} item={item} />
            ))}
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
      <Link to="/portfolio" className="flex justify-center">
        <button className="btn btn-outline m-4 border-t-1 border-x-1 border-b-4 neno-button shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-purple-700 rounded-lg bg-blue-500/20 uppercase relative overflow-hidden text-center font-extrabold text-white">
          All Projects
        </button>
      </Link>
    </div>
  );
};

export default Projects;
