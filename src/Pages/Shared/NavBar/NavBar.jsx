import { NavLink } from "react-router-dom";

const NavBar = () => {
  const nav = (
    <>
      <li className="text-[#EEFF25]"> <NavLink to="/">HOME</NavLink></li>
      <li className="text-[#EEFF25]"> <NavLink to="/contactUs">CONTACT US</NavLink></li>
      <li className="text-[#EEFF25]"> <NavLink to="/dashboard">DASHBOARD</NavLink></li>
      <li className="text-[#EEFF25]"> <NavLink to="/ourMenu">OUR MENU</NavLink></li>
      <li className="text-[#EEFF25]"> <NavLink to="/ourShop">OUR SHOP</NavLink></li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-black fixed bg-opacity-70 text-white px-16">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <a className="w-48 text-xl font-cinzel font-bold cursor-pointer">
            BISTRO BOSS Restaurant
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
