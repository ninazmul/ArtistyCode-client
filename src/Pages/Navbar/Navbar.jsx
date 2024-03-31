import { useContext } from "react";
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

      <ActiveLink spy="true" smooth="true" to="/about">
        <li>About Us</li>
      </ActiveLink>

      <ActiveLink spy="true" smooth="true" to="/portfolio">
        <li>Project Gallery </li>
      </ActiveLink>
    </ul>
  );

  return (
    <div>
      <div className="navbar fixed z-30 glass">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow glass bg-blue-500 text-purple-700 rounded-box w-52"
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
          <ul className="menu menu-horizontal px-4 border-2 rounded-full border-blue-700 bg-blue-500/20">{navBtn}</ul>
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-700 rounded-box min-w-full w-auto  gap-4"
            >
              <li>
                <NavLink to="/dashboard">
                  {user?.displayName && (
                    <p className="justify-between hover:text-purple-700 gradient-text transition text-2xl cursor-pointer">
                      {user.displayName}
                    </p>
                  )}
                </NavLink>

                {user?.email && (
                  <p className="justify-between hover:text-purple-700 gradient-text transition cursor-pointer">
                    {user.email}
                  </p>
                )}
              </li>

              {isSignedIn ? (
                <NavLink className="">
                  <button
                    onClick={handleSignOut}
                    data-aos="fade-right"
                    className="neno-button font-bold shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-white text-orange-50 w-52 rounded-lg p-2 uppercase relative overflow-hidden text-center"
                  >
                    SignOut
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/signIn" className="">
                  <button
                    data-aos="fade-right"
                    className="neno-button font-bold shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-wheat rounded-lg p-2 uppercase relative overflow-hidden text-center w-40"
                  >
                    SignIn
                  </button>
                </NavLink>
              )}
            </ul>
          </div>
          <button className="flex items-center">
            <div className="chat chat-start hidden md:flex">
              <ReactWhatsapp
                className="chat-bubble bg-gradient-to-r from-purple-700 to-blue-700 text-white text-xl font-bold w-52 flex items-center justify-between neno-button shadow-xl hover:shadow-purple-800/50"
                number="+8801580845746"
                message="As-salamu alaykum. I'm interested in learning more about your services."
              >
                Contact Us
                <IoLogoWhatsapp size={24} />
              </ReactWhatsapp>
            </div>
            <div className=" md:hidden">
              <ReactWhatsapp
                className=" text-4xl text-purple-700 gradient-text shadow-xl hover:shadow-purple-800/50"
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
