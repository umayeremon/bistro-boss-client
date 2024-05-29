import { Helmet } from "react-helmet-async";
import { FaBook, FaCalendarDay, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { GrContact } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <Helmet>
        <title>BISTRO BOSS | DASHBOARD</title>
      </Helmet>
      <div className="bg-[#D1A054] w-56 lg:w-64 min-h-screen  pl-4 lg:pl-8 pt-8">
        <div className="">
          <h1 className="text-xs md:text-base lg:text-xl font-cinzel  font-bold">
            BISTRO BOSS
          </h1>
          <h2 className="text-xs md:text-base lg:text-xl font-cinzel  font-bold tracking-wide">
            Restaurant
          </h2>
        </div>
        <div className="mt-8 lg:mt-24 pb-12">
          {isAdmin ? (
            <>
              <ul className="uppercase space-y-8 font-cinzel font-semibold">
                <li>
                  <NavLink
                    to="/dashboard/adminHome"
                    className={({ isActive }) =>
                      isActive
                        ? "flex text-white items-center gap-2"
                        : "flex  items-center gap-2"
                    }
                  >
                    <FaHome className="text-2xl" />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addItems"
                    className={({ isActive }) =>
                      isActive
                        ? "flex text-white items-center gap-2"
                        : "flex  items-center gap-2"
                    }
                  >
                    <FaUtensils className="text-2xl" />
                    add items
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageItems"
                    className={({ isActive }) =>
                      isActive
                        ? "flex text-white items-center gap-2"
                        : "flex  items-center gap-2"
                    }
                  >
                    <FaList className="text-2xl" />
                    manage items
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageBookings"
                    className={({ isActive }) =>
                      isActive
                        ? "flex text-white items-center gap-2"
                        : "flex  items-center gap-2"
                    }
                  >
                    <FaBook className="text-2xl" />
                    Manage bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/users"
                    className={({ isActive }) =>
                      isActive
                        ? "flex text-white items-center gap-2"
                        : "flex  items-center gap-2"
                    }
                  >
                    <FaUsers className="text-2xl" />
                    all users
                  </NavLink>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="uppercase space-y-8 font-cinzel font-semibold">
                <li>
                  <NavLink
                    to="/dashboard/userHome"
                    className={({ isActive }) =>
                      isActive
                        ? "flex text-white items-center gap-2"
                        : "flex  items-center gap-2"
                    }
                  >
                    <FaHome className="text-2xl" />
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/reservation"
                    className={({ isActive }) =>
                      isActive
                        ? "flex text-white items-center gap-2"
                        : "flex  items-center gap-2"
                    }
                  >
                    <FaCalendarDay className="text-2xl" />
                    reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/payment"
                    className={({ isActive }) =>
                      isActive
                        ? "flex text-white items-center gap-2"
                        : "flex  items-center gap-2"
                    }
                  >
                    <GiWallet className="text-2xl" />
                    payment history
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/myCart"
                    className={({ isActive }) =>
                      isActive
                        ? "flex text-white items-center gap-2"
                        : "flex  items-center gap-2"
                    }
                  >
                    <FaShoppingCart className="text-2xl" />
                    my cart{" "}
                    <span className="text-blue-900 font-inter">
                      [{cart.length}]
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/review"
                    className={({ isActive }) =>
                      isActive
                        ? "flex text-white items-center gap-2"
                        : "flex  items-center gap-2"
                    }
                  >
                    <MdRateReview className="text-2xl" />
                    add review
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/booking"
                    className={({ isActive }) =>
                      isActive
                        ? "flex text-white items-center gap-2"
                        : "flex  items-center gap-2"
                    }
                  >
                    <TbBrandBooking className="text-2xl" />
                    my booking
                  </NavLink>
                </li>
              </ul>
            </>
          )}
        </div>
        <hr className="w-48 " />
        <div className="mt-6 lg:mt-12">
          <ul className="uppercase space-y-8 font-cinzel font-semibold">
            <li>
              <NavLink to="/" className="flex  items-center gap-2">
                <FaHome className="text-2xl" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/ourMenu" className="flex  items-center gap-2">
                <IoMenu className="text-2xl" />
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ourShop/salads"
                className="flex  items-center gap-2"
              >
                <FaBagShopping className="text-2xl" />
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink className="flex  items-center gap-2">
                <GrContact className="text-2xl" />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 bg-[#E8E8E8] p-4 lg:p-16">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
