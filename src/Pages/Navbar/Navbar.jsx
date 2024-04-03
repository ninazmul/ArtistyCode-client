import { useContext, useState, useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import ReactWhatsapp from "react-whatsapp";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ActiveLink from "../../Components/ActiveLink";
import logo from "../../assets/Ac logo white text.webp";

const Navbar = () => {
  const { user, signOUT } = useContext(AuthContext);
  const isSignedIn = !!user;
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleSignOut = async () => {
    try {
      await signOUT();
      Swal.fire({
        icon: "success",
        title: "Sign-out successful!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const navBtn = (
    <ul className="lg:flex gap-10 text-xl font-bold uppercase">
      <ActiveLink spy="true" smooth="true" to="/">
        <li>Home </li>
      </ActiveLink>

      <ActiveLink spy="true" smooth="true" to="/portfolio">
        <li>Projects</li>
      </ActiveLink>

      <ActiveLink spy="true" smooth="true" to="/about">
        <li>About Us</li>
      </ActiveLink>

      <ActiveLink spy="true" smooth="true" to="/contact">
        <li>Contact Us</li>
      </ActiveLink>
    </ul>
  );

  return (
    <div
      className={`flex justify-center p-2 transition-transform duration-300 ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <div className="navbar fixed z-30 glass rounded-full w-11/12 px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow glass gradient-background text-white rounded-box w-52"
            >
              {navBtn}
            </ul>
          </div>
          <NavLink to="/">
            <img
              className="normal-case w-16 lg:w-20 text-xl"
              src={logo}
              alt=""
            />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex transition">
          <ul className="menu menu-horizontal px-4 border-2 rounded-full border-blue-700 bg-blue-500/20">
            {navBtn}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost w-10 btn-circle avatar"
            >
              <div>
                {user && user.photoURL ? (
                  <img
                    className="w-10 rounded-full"
                    alt=""
                    src={user.photoURL}
                  />
                ) : (
                  <div className="text-4xl text-purple-700">
                    <FaUserCircle />
                  </div>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-700 rounded-box min-w-full w-auto  gap-4 gradient-background"
            >
              <li>
                <NavLink to="/dashboard">
                  {user?.displayName && (
                    <p className="justify-between text-white transition text-2xl cursor-pointer">
                      {user.displayName}
                    </p>
                  )}
                </NavLink>

                {user?.email && (
                  <p className="justify-between text-white transition cursor-pointer">
                    {user.email}
                  </p>
                )}
              </li>

              {isSignedIn ? (
                <NavLink className="">
                  <button
                    onClick={handleSignOut}
                    className="neno-button font-bold border-2 border-white text-white w-52 rounded-lg p-2 uppercase relative overflow-hidden text-center"
                  >
                    SignOut
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/signIn" className="">
                  <button className="neno-button font-bold shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-wheat text-white rounded-lg p-2 uppercase relative overflow-hidden text-center w-40">
                    SignIn
                  </button>
                </NavLink>
              )}
            </ul>
          </div>
          <button className="flex items-center">
            <div className="chat chat-start hidden md:flex">
              <ReactWhatsapp
                className="rounded-full px-4 py-2 bg-gradient-to-r from-purple-700 to-blue-700 text-white text-xl font-bold w-44 flex items-center justify-between neno-button shadow-xl hover:shadow-purple-800/50"
                number="+8801580845746"
                message="As-salamu alaykum. I'm interested in learning more about your services."
              >
                WhatsApp
                <IoLogoWhatsapp size={30} />
              </ReactWhatsapp>
            </div>
            <div className=" md:hidden">
              <ReactWhatsapp
                className=" text-4xl text-purple-700  rounded-full p-1 hover:shadow-xl hover:shadow-purple-800/50"
                number="+8801580845746"
                message="As-salamu alaykum. I'm interested in learning more about your services."
              >
                <IoLogoWhatsapp />
              </ReactWhatsapp>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
