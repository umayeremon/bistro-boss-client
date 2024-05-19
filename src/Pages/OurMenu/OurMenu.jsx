import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import desserts from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

const OurMenu = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | MENU</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"OUR MENU"}
        subTitle="Would you like to try a dish?"
      ></Cover>

      {/* offered */}
      <SectionTitle heading="TODAY'S OFFER" subHeading="---Don't miss---" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-3">
        {offered.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-6 md:mt-12 mb-16">
        <button className="btn btn-outline border-0 border-b-4 uppercase ">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>

      {/* desserts */}
      <Cover
        img={desserts}
        title="DESSERTS"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-3 mt-8">
        {dessert.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-6 md:mt-12 mb-16">
        <button className="btn btn-outline border-0 border-b-4 uppercase ">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>

      {/* Pizza */}
      <Cover
        img={pizzaImg}
        title="PIZZA"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-3 mt-8">
        {pizza.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-6 md:mt-12 mb-16">
        <button className="btn btn-outline border-0 border-b-4 uppercase ">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>

      {/* salads */}
      <Cover
        img={saladImg}
        title="SALADS"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-3 mt-8">
        {salad.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-6 md:mt-12 mb-16">
        <button className="btn btn-outline border-0 border-b-4 uppercase ">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>

      {/* soup */}
      <Cover
        img={soupImg}
        title="SOUPS"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-3 mt-8">
        {soup.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-6 md:mt-12 mb-16">
        <button className="btn btn-outline border-0 border-b-4 uppercase ">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
    </div>
  );
};

export default OurMenu;
