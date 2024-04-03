import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Plans = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

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
    <div className="py-4 md:py-10">
      <div className="flex justify-center py-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg  uppercase px-4 border-purple-700 gradient-text">
          Pick Your Perfect Plan
        </h1>
      </div>
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          <div className="h-full px-4 py-4">
            <div className="card planBg1 text-white service_glow h-[820px] lg:h-[720px]">
              <div className="card-body relative">
                <div className="absolute top-0 left-0 text-center py-2 px-4 bg-white rounded-lg rounded-b-none w-full">
                  <h2 className="card-title  text-2xl md:text-3xl bg-white text-purple-500 px-4 rounded-lg h-28 font-bold">
                    Pre-made Template:
                  </h2>
                </div>
                <div>
                  <div className="pt-28">
                    <h3 className=" font-bold text-xl">Features:</h3>
                    <p className="  py-2 font-semibold">
                      1. Choose from a selection of pre-made templates.
                    </p>
                    <p className="  py-2 font-semibold">
                      2. Customization options available within the template
                      framework.
                    </p>
                    <p className="  py-2 font-semibold">
                      3. Suitable for individuals or small businesses looking
                      for a quick and affordable online presence.
                    </p>
                    <p className="  py-2 font-semibold">
                      4. Includes basic features such as contact forms, image
                      galleries, and responsive design.
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 text-center py-2 px-4 bg-white rounded-lg rounded-t-none text-purple-500 w-full">
                    <p>Starting from</p>
                    <h3 className="text-xl font-bold md:text-2xl">
                      5k BDT ($50 USD)
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full px-4 py-4">
            <div className="card planBg2 text-white service_glow h-[820px] lg:h-[720px]">
              <div className="card-body relative">
                <div className="absolute top-0 left-0 text-center py-2 px-4 bg-white rounded-lg rounded-b-none w-full">
                  <h2 className="card-title  text-2xl md:text-3xl bg-white text-green-500 px-4 rounded-lg h-28 font-bold">
                    Custom Dynamic Website:
                  </h2>
                </div>

                <div>
                  <div className="pt-28">
                    <h3 className=" font-bold text-xl">Features:</h3>
                    <p className="  py-2 font-semibold">
                      1. Custom-built website with dynamic content management
                      capabilities.
                    </p>
                    <p className="  py-2 font-semibold">
                      2. Customizable templates to match your brand identity.
                    </p>
                    <p className="  py-2 font-semibold">
                      3. Dynamic pages such as blogs, news, events, Agency etc.
                    </p>
                    <p className="  py-2 font-semibold">
                      4. Includes basic features such as contact forms, image
                      galleries, and responsive design.
                    </p>
                    <p className="  py-2 font-semibold">
                      5. Contact form integration for user engagement.
                    </p>
                    <p className="  py-2 font-semibold">
                      6. Responsive design for optimal viewing on all devices.
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 text-center py-2 px-4 bg-white rounded-lg rounded-t-none text-green-500 w-full">
                    <p>Starting from</p>
                    <h3 className="text-xl font-bold md:text-2xl">
                      30k BDT ($300 USD)
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full px-4 py-4">
            <div className="card planBg3 text-white service_glow_special h-[820px] lg:h-[720px]">
              <div className="card-body relative">
                <div className="absolute top-0 left-0 text-center py-2 px-4 bg-white rounded-lg rounded-b-none w-full">
                  <h2 className="card-title  text-2xl md:text-3xl bg-white text-orange-500 px-4 rounded-lg h-28">
                    {" "}
                    E-commerce or Industry-Level Website:
                  </h2>
                </div>

                <div>
                  <div className="pt-28">
                    <h3 className=" font-bold text-xl">Features:</h3>
                    <p className="  py-2 font-semibold">
                      1. Customized website tailored to the needs of e-commerce
                      businesses or industries.
                    </p>
                    <p className="  py-2 font-semibold">
                      2. Advanced e-commerce functionalities including product
                      listings, shopping cart, and secure payment gateway
                      integration.
                    </p>
                    <p className="  py-2 font-semibold">
                      3. Inventory management and order tracking systems.
                    </p>
                    <p className="  py-2 font-semibold">
                      4. Dynamic content management for product updates and
                      promotions.
                    </p>
                    <p className="  py-2 font-semibold">
                      5. Responsive design and SEO optimization for enhanced
                      visibility.
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 text-center py-2 px-4 bg-white rounded-lg rounded-t-none text-orange-500 w-full">
                    <p>Starting from</p>
                    <h3 className="text-xl font-bold md:text-2xl">
                      70k BDT ($700 USD)
                    </h3>
                  </div>
                </div>
              </div>
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
      <div className="grid grid-cols-3 gap-4 justify-items-center"></div>
    </div>
  );
};

export default Plans;
