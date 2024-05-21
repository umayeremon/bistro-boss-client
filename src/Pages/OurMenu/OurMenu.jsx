import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import desserts from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import MenuCategory from "./MenuCategory/MenuCategory";

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
      <MenuCategory items={offered} />

      {/* desserts */}
      <MenuCategory
        items={dessert}
        img={desserts}
        title="desserts"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      {/* Pizza */}

      <MenuCategory
        items={pizza}
        img={pizzaImg}
        title="pizza"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      {/* salads */}

      <MenuCategory
        items={salad}
        img={saladImg}
        title="salads"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      {/* soup */}

      <MenuCategory
        items={soup}
        img={soupImg}
        title="soups"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
    </div>
  );
};

export default OurMenu;
