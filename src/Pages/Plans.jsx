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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg gradient-text uppercase px-4 border-purple-700">
          Pick Your Perfect Plan
        </h1>
      </div>
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          <div className="h-full px-4 py-4">
            <div className="card glass service_glow h-[820px] lg:h-[700px]">
              <div className="card-body">
                <h2 className="card-title gradient-text md:text-2xl">
                  Pre-made Template:
                </h2>
                <div>
                  <div>
                    <h3 className="gradient-text font-bold text-xl">
                      Features:
                    </h3>
                    <p className=" gradient-text py-2 font-semibold">
                      1. Choose from a selection of pre-made templates.
                    </p>
                    <p className=" gradient-text py-2 font-semibold">
                      2. Customization options available within the template
                      framework.
                    </p>
                    <p className=" gradient-text py-2 font-semibold">
                      3. Suitable for individuals or small businesses looking
                      for a quick and affordable online presence.
                    </p>
                    <p className=" gradient-text py-2 font-semibold">
                      4. Includes basic features such as contact forms, image
                      galleries, and responsive design.
                    </p>
                  </div>
                  <div>
                    <h3 className="gradient-text font-bold text-xl">
                      Pricing:
                    </h3>
                    <p className=" gradient-text py-2 font-semibold">
                      Ranges from 5k BDT ($50 USD) to 15k BDT ($150 USD)
                      depending on the template and functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full px-4 py-4">
            <div className="card glass service_glow h-[820px] lg:h-[700px]">
              <div className="card-body">
                <h2 className="card-title gradient-text md:text-2xl">
                  Custom Dynamic Website:
                </h2>
                <div>
                  <div>
                    <h3 className="gradient-text font-bold text-xl">
                      Features:
                    </h3>
                    <p className=" gradient-text py-2 font-semibold">
                      1. Custom-built website with dynamic content management
                      capabilities.
                    </p>
                    <p className=" gradient-text py-2 font-semibold">
                      2. Customizable templates to match your brand identity.
                    </p>
                    <p className=" gradient-text py-2 font-semibold">
                      3. Dynamic pages such as blogs, news, events, Agency etc.
                    </p>
                    <p className=" gradient-text py-2 font-semibold">
                      4. Includes basic features such as contact forms, image
                      galleries, and responsive design.
                    </p>
                    <p className=" gradient-text py-2 font-semibold">
                      5. Contact form integration for user engagement.
                    </p>
                    <p className=" gradient-text py-2 font-semibold">
                      6. Responsive design for optimal viewing on all devices.
                    </p>
                  </div>
                  <div>
                    <h3 className="gradient-text font-bold text-xl">
                      Pricing:
                    </h3>
                    <p className=" gradient-text py-2 font-semibold">
                      Starting from 30k BDT ($300 USD) for a basic dynamic
                      website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full px-4 py-4">
            <div className="card glass service_glow_special h-[820px] lg:h-[700px]">
              <div className="card-body">
                <h2 className="card-title gradient-text md:text-2xl">
                  {" "}
                  E-commerce or Industry-Level Website:
                </h2>
                <div>
                  <div>
                    <h3 className="gradient-text font-bold text-xl">
                      Features:
                    </h3>
                    <p className=" gradient-text py-2 font-semibold">
                      1. Customized website tailored to the needs of e-commerce
                      businesses or industries.
                    </p>
                    <p className=" gradient-text py-2 font-semibold">
                      2. Advanced e-commerce functionalities including product
                      listings, shopping cart, and secure payment gateway
                      integration.
                    </p>
                    <p className=" gradient-text py-2 font-semibold">
                      3. Inventory management and order tracking systems.
                    </p>
                    <p className=" gradient-text py-2 font-semibold">
                      4. Dynamic content management for product updates and
                      promotions.
                    </p>
                    <p className=" gradient-text py-2 font-semibold">
                      5. Responsive design and SEO optimization for enhanced
                      visibility.
                    </p>
                  </div>
                  <div>
                    <h3 className="gradient-text font-bold text-xl">
                      Pricing:
                    </h3>
                    <p className=" gradient-text py-2 font-semibold">
                      Starting from 70k BDT ($700 USD) for a basic e-commerce
                      website.
                    </p>
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
