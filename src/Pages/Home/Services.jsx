import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Services = () => {
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
    <div className="py-4 md:py-10" data-aos="fade-up">
      <div className="flex justify-center py-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg gradient-text uppercase px-4 border-purple-700">
          Our Services
        </h1>
      </div>
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          <div className="h-full px-4 py-4">
            <div className="card glass h-72 service_glow">
              <div className="card-body">
                <h2 className="card-title gradient-text">
                  Dynamic Web Solutions with MERN:
                </h2>
                <p className="text-xs gradient-text">
                  Create dynamic web applications and real-time experiences with
                  our MERN stack expertise, utilizing MongoDB, Express.js,
                  React.js, and Node.js for innovation-driven solutions.
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-outline border-t-1 border-x-1 border-b-4 neno-button shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-purple-700 rounded-lg bg-blue-500/20 uppercase relative overflow-hidden text-center font-extrabold text-white"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Learn more!
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <dialog
                id="my_modal_3"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box glass service_glow">
                  <h2 className="font-bold text-lg">
                    As-salamu alaykum!
                  </h2>
                  <h3 className="py-2 text-start font-bold text-xl ">
                    Custom Web Applications:
                  </h3>
                  <p className=" text-justify">
                    We specialize in building dynamic and scalable web
                    applications using the MERN (MongoDB, Express.js, React.js,
                    Node.js) stack, ensuring high performance and seamless user
                    experiences.
                  </p>
                  <h3 className="py-2 text-start font-bold text-xl ">
                    API Development:
                  </h3>
                  <p className=" text-justify">
                    Our expertise extends to developing robust APIs with Node.js
                    and Express.js, enabling seamless integration of your web
                    application with external systems and services.
                  </p>
                  <h3 className="py-2 text-start font-bold text-xl ">
                    Real-Time Communication:
                  </h3>
                  <p className=" text-justify">
                    Harness the power of WebSocket technology to enable
                    real-time communication features in your MERN stack
                    application, ensuring instantaneous updates and
                    interactions.
                  </p>
                  <h3 className="py-2 text-start font-bold text-xl ">
                    Progressive Web Apps (PWAs):
                  </h3>
                  <p className=" text-justify">
                    Elevate your web presence with Progressive Web Apps
                    developed using React.js, providing an app-like experience
                    to users across devices while leveraging web technologies.
                  </p>
                  <h3 className="py-2 text-start font-bold text-xl ">
                    Data Visualization:
                  </h3>
                  <p className=" text-justify">
                    Unlock valuable insights from your data with interactive and
                    visually appealing data visualization solutions built using
                    libraries like D3.js and Chart.js within your MERN stack
                    application.
                  </p>
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
          <div className="h-full px-4 py-4">
            <div className="card glass h-72 service_glow">
              <div className="card-body">
                <h2 className="card-title gradient-text">
                  Powering Your Web Presence with PHP:
                </h2>
                <p className="text-xs gradient-text">
                  Unlock the potential of PHP for your website needs, from
                  custom content management systems to e-commerce solutions,
                  delivering robust and scalable platforms tailored to your
                  requirements.
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-outline border-t-1 border-x-1 border-b-4 neno-button shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-purple-700 rounded-lg bg-blue-500/20 uppercase relative overflow-hidden text-center font-extrabold text-white"
                    onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                    }
                  >
                    Learn more!
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <dialog
                id="my_modal_2"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box glass service_glow">
                  <h2 className="font-bold text-lg">
                    As-salamu alaykum!
                  </h2>
                  <h3 className="py-2 text-start font-bold text-xl ">
                    Custom PHP Solutions:
                  </h3>
                  <p className=" text-justify">
                    From dynamic websites to robust web applications, we
                    leverage PHP's versatility to deliver tailored solutions
                    that meet your unique requirements.
                  </p>
                  <h3 className="py-2 text-start font-bold text-xl ">
                    Content Management Systems (CMS):
                  </h3>
                  <p className=" text-justify">
                    Harness the power of popular CMS platforms like WordPress,
                    Joomla, and Drupal to easily manage and update your website
                    content without extensive technical knowledge.
                  </p>
                  <h3 className="py-2 text-start font-bold text-xl ">
                    E-commerce Websites:
                  </h3>
                  <p className=" text-justify">
                    Create seamless online shopping experiences with custom PHP
                    e-commerce solutions, integrating secure payment gateways,
                    inventory management, and order processing functionalities.
                  </p>
                  <h3 className="py-2 text-start font-bold text-xl ">
                    PHP Frameworks:
                  </h3>
                  <p className=" text-justify">
                    Utilize powerful PHP frameworks such as Laravel, Symfony,
                    and CodeIgniter to streamline development, enhance security,
                    and ensure scalability of your web application.
                  </p>
                  <h3 className="py-2 text-start font-bold text-xl ">
                    Database Integration:
                  </h3>
                  <p className=" text-justify">
                    Integrate MySQL or other relational databases seamlessly
                    with your PHP-based website to efficiently manage and
                    retrieve data, ensuring optimal performance and reliability.
                  </p>
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
          <div className="h-full px-4 py-4">
            <div className="card glass h-72 service_glow">
              <div className="card-body">
                <h2 className="card-title gradient-text">
                  Tailored WordPress Solutions for Success
                </h2>
                <p className="text-xs gradient-text">
                  Stand out online with custom WordPress themes and plugins,
                  optimized for SEO and mobile responsiveness, ensuring your
                  digital presence leaves a lasting impression.
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-outline border-t-1 border-x-1 border-b-4 neno-button shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-purple-700 rounded-lg bg-blue-500/20 uppercase relative overflow-hidden text-center font-extrabold text-white"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Learn more!
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <dialog
                id="my_modal_3"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box glass service_glow">
                  <h2 className="font-bold text-lg">
                    As-salamu alaykum!
                  </h2>
                  <h3 className="py-2 text-start font-bold text-xl ">
                    Custom WordPress Themes:
                  </h3>
                  <p className=" text-justify">
                    Stand out from the crowd with bespoke WordPress themes
                    tailored to your brand identity and specific requirements,
                    ensuring a unique and memorable online presence.
                  </p>
                  <h3 className="py-2 text-start font-bold text-xl ">
                    Plugin Development:
                  </h3>
                  <p className=" text-justify">
                    Extend the functionality of your WordPress website with
                    custom plugins developed to address your unique needs,
                    enhancing usability and user experience.
                  </p>
                  <h3 className="py-2 text-start font-bold text-xl ">
                    Responsive Design:
                  </h3>
                  <p className=" text-justify">
                    Ensure your WordPress website looks and functions flawlessly
                    across devices with responsive design techniques, catering
                    to the increasing number of mobile users.
                  </p>
                  <h3 className="py-2 text-start font-bold text-xl ">
                    SEO Optimization:
                  </h3>
                  <p className=" text-justify">
                    Boost your visibility in search engine rankings and attract
                    more organic traffic with WordPress SEO optimization,
                    including keyword optimization, meta tags, and site speed
                    enhancements.
                  </p>
                  <h3 className="py-2 text-start font-bold text-xl ">
                    Website Maintenance:
                  </h3>
                  <p className=" text-justify">
                    Keep your WordPress website secure and up-to-date with
                    regular maintenance services, including software updates,
                    security patches, and backups, to ensure optimal performance
                    and reliability.
                  </p>
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
      <div className="grid grid-cols-3 gap-4 justify-items-center"></div>
    </div>
  );
};

export default Services;
