import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };
  const nav = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] font-bold font-inter"
              : "text-white font-bold font-inter"
          }
        >
          HOME
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/ourMenu"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] font-bold font-inter "
              : "text-white font-bold font-inter"
          }
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ourShop/salads"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] font-bold font-inter"
              : "text-white font-bold font-inter"
          }
        >
          OUR SHOP
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] font-bold font-inter"
              : "text-white font-bold font-inter"
          }
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] font-bold font-inter"
              : "text-white font-bold font-inter"
          }
        >
          DASHBOARD
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar max-w-screen-xl bg-black fixed z-10 text-white bg-opacity-70 py-0 md:py-3 px-1 pr-4 md:px-2 md:pr-16 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-70 text-black rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <a className="w-48 text-xs md:text-base lg:text-xl font-cinzel  font-bold cursor-pointer">
            BISTRO BOSS Restaurant
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button onClick={handleLogout} className="btn btn-ghost">
                Log Out
              </button>
              <div className="tooltip tooltip-left cursor-pointer" data-tip={user?.displayName} >
                <img src={user?.photoURL} alt="" className="w-8 rounded-full" />
              </div>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="btn btn-ghost">Log in</button>
              </Link>{" "}
              /
              <Link to={"/register"}>
                <button className="btn btn-ghost">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
