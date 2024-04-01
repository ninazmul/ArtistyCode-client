import { BsFacebook } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "../../../src/index.css";
import { Link } from "react-router-dom";
// import { TfiEmail } from "react-icons/tfi";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import logo from "../../assets/Ac logo white text.webp";

const Footer = () => {
  return (
    <div>
      <footer className="footer flex flex-col items-center p-4 justify-between glass card_glow">
        <div className="flex flex-col md:flex-row justify-around w-full">
          <nav className="flex flex-col">
            <h6 className="footer-title">Company</h6>
            <Link to="/about" className="link link-hover">
              About us
            </Link>
            <Link to="/contact" className="link link-hover">
              Contact Us
            </Link>
            <Link to="/jobs" className="link link-hover">
              Jobs
            </Link>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Services</h6>
            <Link to="/terms" className="link link-hover">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="link link-hover">
              Privacy policy
            </Link>
            <Link to="/cookie" className="link link-hover">
              Cookie policy
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="flex justify-center items-center space-x-2">
              <Link
                href="https://www.facebook.com/nazmulsaw"
                className=" rounded-full glow p-2"
                target="_blank"
              >
                <BsFacebook className="text-[28px]"></BsFacebook>
              </Link>
              <Link
                href="https://github.com/artistycode-studio"
                className=" rounded-full glow p-2"
                target="_blank"
              >
                <AiFillGithub className="text-[28px]"></AiFillGithub>
              </Link>
              {/* <Link
              href="/email"
              className=" rounded-full glow p-2"
            >
              <TfiEmail className="text-[28px]"></TfiEmail>
            </Link> */}
              <Link
                href="https://www.linkedin.com/in/ninazmul"
                className=" rounded-full glow p-2"
                target="_blank"
              >
                <AiFillLinkedin className="text-[28px] rounded-full"></AiFillLinkedin>
              </Link>
              <Link
                href="https://www.fiverr.com/ninazmul"
                className=" rounded-full glow p-2"
                target="_blank"
              >
                <TbBrandFiverr className="text-[28px] rounded-full"></TbBrandFiverr>
              </Link>
              <Link
                href="https://www.upwork.com/freelancers/~01369d0d10ed1780e4"
                className=" rounded-full glow p-2"
                target="_blank"
              >
                <SiUpwork className="text-[28px] rounded-full" />
              </Link>
            </div>
          </nav>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:items-center items-end justify-around w-full">
          <aside className="flex items-center gap-4">
            <Link>
              <img className="w-24" src={logo} alt="" />
            </Link>
            <p className="text-purple-700 gradient-text">
              Copyright © - All right reserved by
              <Link className="text-white"> ArtistyCode Studio</Link>
            </p>
          </aside>
          <div className="">
            <div className="flex items-center">
              <p>Developer:</p>{" "}
              <Link to="https://ni-portfolio.web.app" target="_blank">
                <img
                  src="../../../public/N.I. Logo.png"
                  alt=""
                  className="w-24 lg:w-32"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
