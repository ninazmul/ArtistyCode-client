import { BsFacebook } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "../../../src/index.css";
import { Link } from "react-router-dom";
// import { TfiEmail } from "react-icons/tfi";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer className="footer flex flex-col md:flex-row items-center p-4 justify-between">
        <aside className="items-center grid-flow-col">
          <Link>
            <img
              className="w-52"
              src="https://i.ibb.co/353tbns/N-I-Logo-croped.png"
              alt=""
            />
          </Link>
          <p className="text-orange-500">
            Copyright © 2024 - All right reserved by
            <span className="text-orange-200"> N.I. Nazmul</span>
          </p>
        </aside>
        <div className="">
          <div className="flex justify-center items-center space-x-2">
            <a
              href="https://www.facebook.com/nazmulsaw"
              className="text-orange-600 hover:text-orange-500 rounded-full glow p-2"
            >
              <BsFacebook className="text-[28px]"></BsFacebook>
            </a>
            <a
              href="https://github.com/ninazmul"
              className="text-orange-600 hover:text-orange-500 rounded-full glow p-2"
            >
              <AiFillGithub className="text-[28px]"></AiFillGithub>
            </a>
            {/* <a
              href="/email"
              className="text-orange-600 hover:text-orange-500 rounded-full glow p-2"
            >
              <TfiEmail className="text-[28px]"></TfiEmail>
            </a> */}
            <a
              href="https://www.linkedin.com/in/ninazmul"
              className="text-orange-600 hover:text-orange-500 rounded-full glow p-2"
            >
              <AiFillLinkedin className="text-[28px] rounded-full"></AiFillLinkedin>
            </a>
            <a
              href="https://www.fiverr.com/ninazmul"
              className="text-orange-600 hover:text-orange-500 rounded-full glow p-2"
            >
              <TbBrandFiverr className="text-[28px] rounded-full"></TbBrandFiverr>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01369d0d10ed1780e4"
              className="text-orange-600 hover:text-orange-500 rounded-full glow p-2"
            >
              <SiUpwork className="text-[28px] rounded-full" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
