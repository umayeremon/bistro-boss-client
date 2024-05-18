import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
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
          to="/ourShop"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] font-bold font-inter"
              : "text-white font-bold font-inter"
          }
        >
          OUR SHOP
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar max-w-screen-2xl bg-black fixed z-10 text-white bg-opacity-70 py-0 md:py-3 px-1 md:px-4 lg:px-8">
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
          <Link>Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
